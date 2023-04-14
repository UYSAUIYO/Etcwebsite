const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');
const uaParser = require('ua-parser-js');
const geoip = require('geoip-lite');
const ipware = require('ipware')();
const cron = require('cron');

// 日志存储目录
const logsDir = path.join(__dirname, '.', 'logs');
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

// 定义日志中间件
const logger = function(req, res, next) {
    const now = new Date();
    const year = now.getFullYear();
    const month = 1 + now.getMonth();
    const day = now.getDate();
    const fileName = `${year}-${month}-${day}.xlsx`;
    const filePath = path.join(logsDir, fileName);

    // 获取客户端 IP 地址和物理地址
    const ipInfo = ipware.get_ip(req);
    const ip = ipInfo.clientIp;
    const geo = geoip.lookup(ip);

    // 获取客户端浏览器 UA
    const uaParserResult = uaParser(req.headers['user-agent']);
    const browser = uaParserResult.browser.name;
    const os = uaParserResult.os.name;

    // 判断 UA 是否未知
    let userAgent;
    if (!browser && !os) {
        userAgent = '未认知网络或设备型号';
    } else {
        userAgent = `${browser} on ${os}`;
    }

    // 获取请求的目录、请求时间和请求文件的大小
    const url = req.url;
    const time = now.toLocaleString();
    const fileSize = req.headers['content-length'] || 0;

    // 将日志内容写入 xlsx 文件
    let row;
    if (geo) {
        row = [ip, geo.city || geo.country, userAgent, url, time, fileSize, fileName];
    } else {
        row = [ip, '', userAgent, url, time, fileSize, fileName];
    }
    let worksheet;
    if (fs.existsSync(filePath)) {
        const workbook = xlsx.readFile(filePath);
        worksheet = workbook.Sheets[workbook.SheetNames[0]];
    } else {
        worksheet = xlsx.utils.aoa_to_sheet([['IP', '物理地址', '用户代理', '目录', '时间', '大小', '文件名']]);
    }
    xlsx.utils.sheet_add_aoa(worksheet, [row], {origin: -1});
    let newWorkbook;
    newWorkbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(newWorkbook, worksheet, 'Sheet1');
    xlsx.writeFile(newWorkbook, filePath);

    next();
};

// 定期删除日志文件
const job = new cron.CronJob('0 0 0 * * *',
    function () {
        const oneWeekAgo = new Date(new Date() - 14 * 24 * 60 * 60 * 1000);
        const fileNames = fs.readdirSync(logsDir);
        fileNames.forEach(function (fileName) {
            const filePath = path.join(logsDir, fileName);
            const fileStat = fs.statSync(filePath);
            if (!(!fileStat.isFile() || fileStat.mtime >= oneWeekAgo)) {
                fs.unlinkSync(filePath);
            }
        });
    });
job.start();

module.exports = logger;

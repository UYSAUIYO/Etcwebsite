const express = require("express");
const app = express();

//辅助组件模块引入
const logger = require('./logger');

//API模块引入
const linksAPI = require('./api/linksAPI');
const aboutAPI = require('./api/aboutAPI');
const tipsAPI = require('./api/tipsAPI');
const musicAPI = require('./api/audioAPI');

//运行端口
const PORT = process.env.PORT || 3000


// CORS middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//记录日志
app.use(logger);

//组件挂载
app.use('/api/link', linksAPI);
app.use('/api/about', aboutAPI);
app.use('/api/tips', tipsAPI);
app.use('/api/audio', musicAPI);




app.listen(3000, () => console.log(`Server started on port ${PORT}`));

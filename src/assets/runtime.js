var BootDate = new Date("2017/09/25 00:00:00");
// eslint-disable-next-line no-unused-vars
function ShowRunTime(id) {
    var NowDate = new Date();
    var RunDateM = parseInt(NowDate - BootDate);
    var RunDays = Math.floor(RunDateM/(24*3600*1000));
    var RunHours = Math.floor(RunDateM%(24*3600*1000)/(3600*1000));
    var RunMinutes = Math.floor(RunDateM%(24*3600*1000)%(3600*1000)/(60*1000));
    var RunSeconds = Math.round(RunDateM%(24*3600*1000)%(3600*1000)%(60*1000)/1000);
    var RunTime = RunDays + "天" + RunHours + "时" + RunMinutes + "分" + RunSeconds + "秒";
    document.getElementById(id).innerHTML = "小俊博客在风风雨雨中勉勉强强已运行：" + RunTime;
}
setInterval("ShowRunTime('RunTime')", 1000);

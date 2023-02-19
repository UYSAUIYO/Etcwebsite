function username() {
    if (document.getElementById("username".value == "")) {
        alert('请输入游戏名称')
        return false;
    }
    return true;
}

var email = document.getElementById("userqq").value;
$("#emailmsg").empty();
if (email != "") {
    var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    isok = reg.test(email);
    if (!isok) {
        $("#emailmsg").append("邮箱错误");
        document.getElementById("userqq").focus();
        return false;
    }
}
function usermessage() {
    if (document.getElementById("usermessage".value == "")) {
        alert('输入内容不能为空')
        return false;
    }
    return true;
}


let oMenu = document.getElementById("rightMenu");
let aUl = oMenu.getElementsByTagName("ul");
let rec = 0;
// eslint-disable-next-line no-undef
let maxWidth = maxHeight = 0;
let aDoc = [document.documentElement.offsetWidth, document.documentElement.offsetHeight];
//自定义右键菜单
document.oncontextmenu = function (event)
{
    // eslint-disable-next-line no-redeclare
    var event = event || window.event;
    oMenu.style.display = "block";
    oMenu.style.top = event.clientY + "px";
    oMenu.style.left = event.clientX + "px";
    setWidth(aUl[0]);

    //最大显示范围
    maxWidth = aDoc[0] - oMenu.offsetWidth;
    // eslint-disable-next-line no-undef
    maxHeight = aDoc[1] - oMenu.offsetHeight;

    //防止菜单溢出
    // eslint-disable-next-line no-undef
    oMenu.offsetTop > maxHeight && (oMenu.style.top = maxHeight + "px");
    oMenu.offsetLeft > maxWidth && (oMenu.style.left = maxWidth + "px");

    return false;
};
//点击隐藏菜单
document.onclick = function ()
{
    oMenu.style.display = "none"
};
//取li中最大的宽度, 并赋给同级所有li
function setWidth(obj)
{
    maxWidth = 0;
    for (rec = 0; rec < obj.children.length; rec++)
    {
        let oLi = obj.children[rec];
        let iWidth = oLi.clientWidth - parseInt(oLi.currentStyle ? oLi.currentStyle["paddingLeft"] : getComputedStyle(oLi, null)["paddingLeft"]) * 2;
        if (iWidth > maxWidth) maxWidth = iWidth;
    }
    // eslint-disable-next-line no-undef
    for (rec = 0; rec < obj.children.length; rec++) obj.children[i].style.width = maxWidth + "px";
}
// 点击事件
oMenu.addEventListener('click', function (e) {
    console.log(e.target.innerText);
});

/*var btn=document.querySelector("button");
console.dir(btn);
btn.onclick=function()
{
    console.log("button was pressed");
};*///only one button will select
/*  var btns=document.querySelectorAll("button");
for(btn of btns)
{
    btn.onclick=myfunc;
    btn.onmouseenter=function cursor()
    {
        alert("button was there");
    }
}
function myfunc()
{
    console.log("button was pressed");
}*/ //for multiple button and alert 
//event listner
/*var btns=document.querySelectorAll("button");
for (btn of btns)
    {
        btn.addEventListener("click",myfunc);
        btn.addEventListener("click",hello);
    }
    function myfunc()
    {
        console.log("button was pressed");
    };
    function hello()
    {
        console.log("hello");
    };*/
var p = document.querySelector("p");

    p.addEventListener("mouseenter",para);

function para()
{
 console.log("parragraph");
};
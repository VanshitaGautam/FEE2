// scope global :1 global 2 function 3 block 4 lexical 
//global scope :by default all values are globally accesible 
/*let a=5;
var b=10;
const c=15;
function myfunc()
{
    console.log(a);
    console.log(b);
    console.log(c);
}
myfunc()
console.log(a);
console.log(b);
console.log(c);*/
//functional scope 
/*function myfunc(a,b)
{
    let c = a=-b;
    console.log(c);
}
myfunc(5,3);*/
//console.log(c); it will undefined because in function scope it only defined in function 
/*//block scope//
{
    let a=20; 
    const b=20;
    var c= 30;
}
//console.log(a); you cannot access it there
//console.log(b);you cannot access it there
console.log(c);*/
//lexical scope
function outerFunc()
{
    var a=20;
    /*var d=a-b;// it cannot access it inner function cannot access outer function
    console.log(d);*/
    function innerFunc()

{
     var b=30;
     var c=a+b;
}
innerFunc()
}
outerFunc()
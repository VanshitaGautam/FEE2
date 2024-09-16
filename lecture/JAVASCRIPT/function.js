//function declartion
function sum(a,b)// and b are parameter
{
    var c=a+b;
    console.log(c);
}
sum(2,3)//function call and 2 and 3 are functional argument 
//functional default argument
function multi(d,e=4)
{
 var f= d  * e;
 console.log(f);
}
multi(5);
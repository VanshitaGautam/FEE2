/*console.log('started execution');
function myfunc()
{
    console.log("this is function");
}
myfunc();
console.log("execution ends");*///synchronous method(1)
//(2)
console.log("execution start");
for(let i=0;i<10;i++)
{
    console.log("for loop ended");
}
console.log("execution ended");
//setTimeout: this function offers to specify delay
//arrow function
console.log("execution started");
setTimeout(() => {
    console.log("settimeout function execute");
}, 2000);
for(let j=0;j<5;j++)
{
    console.log("loops");
}
console.log("execution ended");



















//asynchrnous start
/*function myproducts()
{
    let product =['','','',]
}
myproducts(payment)
function payment()
{
    let pay=[[]]
}
payment(checkout)*/
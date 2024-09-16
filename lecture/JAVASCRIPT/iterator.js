/* iterator:array,string,map,set*/ 
let arr=[1,2,3,4,5];
console.log(arr[Symbol.iterator]);
//for of 
for(i of arr)
{
console.log(i);
}
//for in
let obj ={name:'vanshu'};
for(i in obj)
{
    console.log(objSymbol.iterator);
    console.log(i);
}

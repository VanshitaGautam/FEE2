//High Order Function
//print name for 20 times
function printname(func,num)
{
  for(let i=1;i<=num;i++)
  {
    func();
  }
}
let myname=function()
{
    console.log("Vanshita");
};
printname(myname,20);


//find even/odd number of a given number
let arr=[4,5,6,7]
function notevenodd(func,arr)
{
  for(let i=0;i<5;i++)
  {
    func(arr[i]);
  }
}
let even=function(num)
{
    if(num%2==0)
    {
        console.log(num);
    }
    else{
        console.log("not even");
    }
}
notevenodd(even,arr)

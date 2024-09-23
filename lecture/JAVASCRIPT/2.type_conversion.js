console.log(1+2);
console.log(1+"2");//+ is concat
console.log(5-"3");//- is type conversion
console.log(10+"A");//+ concat
console.log(10-"A");//Nan not take assic value when try to convert in number
console.log(10+"2"-"A");
console.log(typeof(1+"2"));
//string datatype to number 
let a="20";
console.log(typeof(a));
let c =Number(a);
console.log(typeof(c));
let d=parseInt(a);
console.log(typeof(d));
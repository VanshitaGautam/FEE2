//how to  define object(used for handeling of complex data)there are two types constructor and literals
//constructor: 
//literal :
// const obj= new Object();
// obj.name="Vanshita";
// console.log(typeof obj);
//literals
/*const users=
{
    age:18,
    Subject:'FEE',
    Name:'Vanshita',
    full_name:'vanshu'

}
console.log(typeof users);
// console.log(users.name);
console.log(users['full_name']);*/
//object inside object
/*const users={
    users1:{
        name:"vanshita",
        age:19
    },
    users2:{
name:"urmeet",
age:200
    },
    users3:{
        name:
        {
            name:"yash",
            age:100
        }
    }
}
console.log(users.users3.name.name);*/
let obj1={name1:"Vanshita",age:19}
let obj2={name2:"arnav",age:13}
//let obj3={...obj1,...obj2}
//console.log(obj3);
let obj4=Object.assign(obj1,obj2)
console.log(obj4);
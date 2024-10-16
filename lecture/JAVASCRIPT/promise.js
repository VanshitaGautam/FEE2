/* promise -> promise request the future events,technicaaly they are objects. by default promises stay
promise states --> pending,fulfilled,rejected
//1.2:promise accept

//represents the future events.technically they are objects.by default they remain in pending 
//state.
//it has three states- pending,fulfill,rejected

//accepts two callbacks-resolve and reject

*/
//1.1 pending state
// let n=new Promise((resolve,reject)=>{
  
// });
// console.log(n);

// //1.2 moves to other state when then and catch condn are put
// let like =true;

// let p=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         if(like) {
//             resolve("yeah , good");
//         }
//         else{
//             reject("naah, you are shitt");
//         }
//     }, 2000);
// });

// console.log(p);

// //2.1  consuming promises
// p.then((value)=>{
//     console.log(message is : ${value});
// },(err)=>{
//     console.log(message is : ${err});
// });

// //2.2 another method of consuming promises
// p.then((value)=>{
//     console.log(message is : ${value});
// })
// .catch((err)=>{
//     console.log(message is : ${err});
// });


//promise chaining

/*let p1=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("promise 1 resolved");
    },2000);
});

p1.then((value)=>{
    console.log(value);
    let p2=new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("promise 2 resolved");
        },2000);
    });
    return p2;
    
}
).then((value)=>{
    console.log("done");
    return 2;
}).then((value)=>{
    console.log("ok now done!!!");
});


//
function maggi(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let dukankhulihai=true;
            if(dukankhulihai)
            {
                resolve("maggi mil gayi");
            }
            else{
                reject("maggi ni milli");
            }
        }, 2000);
    });
}

maggi().then((value)=>{
    console.log(value);
})
.catch((err)=>{
    console.log(err);"
});*/
// creating function moviedownland which take a argument url .create a promise if url is not rejected else status must be in resolve state
let xyz="abc//.com/mp4";
let fileExtension = xyz.split("com/").pop();
function moviedownload()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            if(fileExtension="mp4")
            {
                resolve("mp4 is there");
            }
            else{
                reject("mp4 is not there");
            }
        },2000);
    });
}
moviedownload().then((value)=>
{
    console.log(value);
})
.catch((err)=>
{
    console.log(err);
});
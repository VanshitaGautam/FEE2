var form=document.querySelector("form");
form.addEventListener('submit',function(event){
    

    let inp=document.querySelector("input");
    console.dir(inp);
    console.log(inp.value);
    event.preventDefault();
    console.log("form submitted");
    let p=document.querySelector("p")
    p.innerText=inp.value;
});
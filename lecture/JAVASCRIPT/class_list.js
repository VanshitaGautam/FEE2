var newh1 = document.querySelector("h1");
//console.dir(newh1,classlist);
///class list added
newh1.classlist.add("green");
console.dir(newh1.classlist(1));
//class list delete
//newh1.classlist.remove("green");
newh1.classList.toggle("green");
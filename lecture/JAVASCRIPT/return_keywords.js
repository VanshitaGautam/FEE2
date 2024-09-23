// function terminate itself in two condition when return keyword is used and when function defination is finshed
function multiple(a,b)
{
    let c=a*b;
    console.log(c);
    return c;
    console.log(c);
}
multiple(2,6);
let url = "https://catfact.ninja/fact"

async function getData() {
    let res =  await fetch(url);
    let data = await res.json();
    //console.log(res.json);
    console.log(data.fact);
}
getData();
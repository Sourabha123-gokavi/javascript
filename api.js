// json javascript object notation
// www.json.com explore this website
// accessing data from json

// JSON.parse(data) method
// to parse a string data into a js object

// JSON.stringify(data) method
// to parse a js object into JSON

let jsondata='{"fact":"hello","length":"20"}';
let validRes=JSON.parse(jsondata);
console.log(validRes);
console.log("hello");

let jsonformat=JSON.stringify(validRes);
console.log(jsonformat);

//ajax
// asynchronous javascrit and xml
// here the page will not reload but instead it will just the reload the part it is updated

//status code
// 200 -ok
// 404 -not found
// 400 bad request
// 500 internal server error


// fething first request
let url="https://catfact.ninja/fact"
// fetch(url).then((res)=>{
//     console.log(res);// this data is not able to read so we have to parse it so use .json() method to parse
//     //console.log(res.json());
//     //to see the data 
//     res.json().then((data)=>{
//         console.log(data);
//     }).catch((err)=>{
//         console.log(err);
//     })
// }).catch((err)=>{
//     console.log(err);
// })
// this fetch will returns the promise 
//so we can use then and catch method for this fetch method


// using async with await

// async function getFact(){
//     //let res=fetch(url);// this will give the response as undefined
//     let res=await fetch(url);// since it is asynchronous we have to wait so use await before the fetch
//     console.log(res);
// }

// the above function shows error if the url is not proper
// so use try and catch to tackle that


// async function getFact(){
//     //let res=fetch(url);// this will give the response as undefined
//     try{
//         let res=await fetch(url);// since it is asynchronous we have to wait so use await before the fetch
//     console.log(res);
//     }catch(e){
//         console.log(e);
//     }
// }

//using axios 
// why? here there is no need to parse the response

async function getFact(){
    //let res=fetch(url);// this will give the response as undefined
    try{
        let res=await axios.get(url);// since it is asynchronous we have to wait so use await before the fetch
    console.log(res.data);
    }catch(e){
        console.log(e);
    }
}
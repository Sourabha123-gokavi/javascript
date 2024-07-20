// function savetoDb(data,success,failure){
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//         success();
//     }else{
//         failure();
//     }
// }
// savetoDb("Sourabh",()=>{
//     console.log("Success : our data was saved");
//     savetoDb("Hello world",()=>{},()=>{});
// },()=>{
//     console.log("Failure : Weak connection, data not saved");
// })

//above code starts the callback hell 

// promise object represents the eventual completion(or failure) of an
// asynchronous operation and its resulting value 

//resolve -> success
// reject -> failure

function savetoDB(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("The success message is sent back");
        } else {
            reject("The failure message is sent back");
        }
    });
}
let request=savetoDB("This is new promise")
console.log(request);

// fulfilled  reject 
//   |          |
// then and catch method
request.then(()=>{
    console.log("the promise was successful");
}).catch(()=>{
    console.log("The promise is failed");
})


//promise chaining
// here we are using more then and one catch



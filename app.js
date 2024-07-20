//call stack

function hello(){
    console.log("Hello");
}
function demo(){
    hello();
}
demo();

//single threaded
// javascript will not work in multithreaded environment
// this wil look like it is working in multithreaded environment
// it is not ,the browser which is written is c++ / java will
// work this in the multithreaded environment
//there for the js will act as asynchrnous


setTimeout(function(){
    console.log("This is from call back1")
},2000);
console.log("Hello...1");

setTimeout(function(){
    console.log("This is from call back2")
},2000);
console.log("Hello...2");





h1=document.querySelector("h1");
// setTimeout(()=>{
//     h1.style.color="red";
// },1000);

// h1=document.querySelector("h1");
// setTimeout(()=>{
//     h1.style.color="green";
// },2000);

// h1=document.querySelector("h1");
// setTimeout(()=>{
//     h1.style.color="orange";
// },3000);
//we can't do all these hardcode and all 
//so make this happen use call back
// function changecolor(color,delay){
//     setTimeout(() => {
//         h1.style.color=color;
//     }, delay);
// }

// changecolor("red",1000);
// changecolor("green",2000);
// changecolor("blue",3000);

function change(color,delay,nextcolorChange){
    setTimeout(()=>{
        h1.style.color=color;
        if(nextcolorChange)nextcolorChange();
    },delay)
}

change("red", 1000, () => (
    change("orange", 1000, () => (
        change("pink", 1000)
    ))
));

//when this nesting will happend too much then there is a
// problem associated with is called as callback hell
// to tackle this problem
//we use promises 
const hello = (hname) => {
    console.log(`hello ${hname}`);
}

// Call the hello function
// hello("Naveen");

// console.log(global);

setTimeout (()=> {
    console.log("Hello world"); 
    clearInterval(func);
},3000);

console.log(__dirname);
console.log(__filename);

const func =setInterval (() => {
    console.log("Hello Naveen");
},1000);
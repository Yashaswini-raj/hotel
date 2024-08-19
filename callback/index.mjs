import { userInfo } from 'os';
const user = userInfo();
console.log(user);

/*
call back
function y(){
    console.log("y is called")
}
setTimeout(()=>{
    console.log("Timer")
},5000)

function x(y){
    console.log("x is called")
    y()
}
x(y)*/
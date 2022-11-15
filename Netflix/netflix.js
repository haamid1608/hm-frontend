console.log("Hello World");

var a=10;
var b=20;
var c=a+b;
console.log(c);

var a="10";
console.log(a+1);
console.log(1+a);

var btn1=document.getElementsByClassName("purchase-btn")[0];
var btn2=document.querySelectorAll(".purchase-btn")[1];
var btn_Trial=document.getElementsByClassName("js-trial-btn")[0];
var update_plan=document.getElementsByClassName("update-text")[0];
console.log(btn_Trial,update_plan);
console.log(btn2);

btn_Trial.addEventListener("click",update);
function update(){
    console.log("Inside func");
    setTimeout(update_data,5000);
}

function update_data(){
    update_plan.innerHTML="National Plans";
}

console.log(btn1);
btn1.addEventListener("click", add);
btn2.addEventListener("click", add1);

function add(){
    console.log("The button is clicked");
}

function add1(){
    console.log("Second button is clicked");
}
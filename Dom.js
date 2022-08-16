
let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let square = document.querySelector(".square");
let input = document.querySelector(".input");
let num = 1;
input.innerHTML=num;
let changeColor=()=>{
if(num>3&&num<=6){
    square.style.backgroundColor="yellow";
}else if(num>6&&num<=9){
    square.style.backgroundColor="green";
}else{
    square.style.backgroundColor="red";
}
}
minus.onclick=()=>{
    if(num>1){
        num--
        input.innerHTML=num;
        changeColor()
    }
    
};
plus.onclick=()=>{
    if(num<9){
    num++
    input.innerHTML=num;
    changeColor()
    }
}



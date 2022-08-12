
// function hello (){
//     console.log("HEllo World!!!");
// };
// hello();

// (function(){
//     console.log("I learn HTML CSS JS React");
// })();

// function num(a,b){
//     console.log(a,b);
// }
// num(1,2);

// function plus(a,b){
//     console.log(a+b);
// }
// plus(2,2);

// function che(a){
//     if(a%2===0){
//     console.log(1);
//     }
//     else{
//     console.log(2);
//     }
// }
// che(4);

// let array=[32,57,103,220,330,1,9,87,42];
// function maxnum(arr){
//     let max=arr[0];
// for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i]; 
//         }
// }
// return max;
// }
// console.log(maxnum(array));

let text="test";
function reverse(string){
    let reText="";
    for(let i=string.length-1;i>=0;i--){
        reText+=string[i];
    }
    return reText;
}
console.log(reverse(text));
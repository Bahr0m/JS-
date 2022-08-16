let Vasya={
    name:"Vasya",
    cash:1000,
    value:"TJS"
}
let Ivan={
    name:"Ivan",
    cash:150,
    value:"TJS"
}
let Anton={
    name:"Anton",
    cash:230,
    value:"TJS"
}
let Jony={
    name:"Jony",
    cash:1234,
    value:"USD"
}
let Max={
    name:"Max",
    cash:333,
    value:"USD"
}
let John={
    name:"John",
    cash:780,
    value:"USD"
}
let Umed={
    name:"Umed",
    cash:280,
    value:"TJS"
}
let persons=[Vasya,Ivan,Anton,Jony,Max,John,Umed];
let richMen=[];
let cashOf=0;

for(let i=0;i<persons.length;i++){
    if(persons[i].cash>=500){
        richMen.push(persons[i].name);
        cashOf+=persons[i].cash;
    }
}
console.log(richMen);
console.log(cashOf);


let cashAll=0;
for(let j=0;j<persons.length;j++){
    if(persons[j].value=="USD"){
        persons[j].cash*=10.20;
        cashAll+=persons[j].cash;
        persons[j].value="TJS";
        continue;
    }
        cashAll+=persons[j].cash;
}
console.log(cashAll.toFixed(2));
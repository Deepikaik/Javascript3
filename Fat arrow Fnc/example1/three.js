// fnc with return st
/*function add(a,b,c){
    return (a+b+c);
}
let r1=add(10,20,30)
console.log(r1)*/


// fat arrow fnc with return st
/*let add=(a,b,c)=>{
    return(a+b+c)
}
let r2=add(10,20,20)
console.log(r2)*/




//fat arrow fnc without return st
let add=(a,b,c)=>a+b+c;

let r1=add(1,2,3);
console.log(r1)

let r2=add(10,20,30);
console.log(r2)

let r3=add(10,20);
console.log(r3)              //NaN

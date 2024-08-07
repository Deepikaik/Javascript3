//normal fnc with return st
let cal_age=function(year){    // or function cal_age(year){}
    return(2024-year)
}
let age1=cal_age(1984)
console.log(age1)



//fat arrow fnc with return st
let callage=(year)=>{
    return(2024-year)
}
let age2=callage(1983)
console.log(age2)





//fat arrow fnc without return st
let calage=year=>2024-year;
let age3=calage(1982)
console.log(age3)
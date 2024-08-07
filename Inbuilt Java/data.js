//document.getElementById("abc").innerHTML=new Date();


//using js inbuilt function to make a digital clock
//settimeout (after) and setinterval(every) is inbuilt

//document.getElementById("abc").innerHTML=new Date().toLocaleTimeString


/*setTimeout(function(){
    console.log("ga")
},4000)*/


/*setInterval(function(){
    console.log("ga")
},4000)*/


setInterval(function(){
    document.getElementById("abc").innerHTML=new Date().toLocaleTimeString()
},1000)
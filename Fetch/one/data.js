fetch('https://dummyjson.com/carts')
.then((Response)=>{
    return Response.json()
})
.then((data)=>{
    console.log(typeof data)
    //console.log(data)
})
.catch((err)=>{
    console.log(err.message)
})

////////////////////////////////////////



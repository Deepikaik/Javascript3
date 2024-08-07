let users=[{id:1,name :"Teodoor",gender:"Male",sal:"$0.99"},
    {id:2,name:"Auberta",gender:"Female",sal:"$3.69"},
    {id:3,name:"Aeriel",gender:"Female",sal:"$0.20"},
    {id:4,name:"Oralla",gender:"Female",sal:"$9.56"},
    {id:5,name:"Cob",gender:"Male",sal:"$0.67"},
    {id:6,name:"Moises",gender:"Male",sal:"$7.33"},
    {id:7,name:"Michelina",gender:"Female",sal:"$6.13"}]

function getUsers(){
    let rows=""
    for (user of users){
        if(user.gender ==="Female"){
        rows= rows+`<tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.gender}</td>
        <td>${user.sal}</td>
        </tr>`}
    }
    document.getElementById("abc").innerHTML=rows
}

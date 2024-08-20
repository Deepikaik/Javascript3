let users=[{"id":1,"name":"Koo","gender":"Female","image":"http://dummyimage.com/250x100.png/dddddd/000000"},
{"id":2,"name":"Felicia","gender":"Female","image":"http://dummyimage.com/204x100.png/ff4444/ffffff"},
{"id":3,"name":"Korey","gender":"Male","image":"http://dummyimage.com/248x100.png/cc0000/ffffff"},
{"id":4,"name":"Blondy","gender":"Polygender","image":"http://dummyimage.com/198x100.png/dddddd/000000"},
{"id":5,"name":"Lynnette","gender":"Female","image":"http://dummyimage.com/247x100.png/5fa2dd/ffffff"},
{"id":6,"name":"Ronnica","gender":"Female","image":"http://dummyimage.com/107x100.png/5fa2dd/ffffff"},
{"id":7,"name":"Shayna","gender":"Female","image":"http://dummyimage.com/224x100.png/cc0000/ffffff"},
{"id":8,"name":"Thor","gender":"Male","image":"http://dummyimage.com/100x100.png/dddddd/000000"},
{"id":9,"name":"Waylan","gender":"Male","image":"http://dummyimage.com/211x100.png/5fa2dd/ffffff"},
{"id":10,"name":"Shepperd","gender":"Male","image":"http://dummyimage.com/130x100.png/dddddd/000000"},
{"id":11,"name":"Alvina","gender":"Non-binary","image":"http://dummyimage.com/120x100.png/5fa2dd/ffffff"},
{"id":12,"name":"Renado","gender":"Male","image":"http://dummyimage.com/190x100.png/5fa2dd/ffffff"},
{"id":13,"name":"Adolph","gender":"Male","image":"http://dummyimage.com/142x100.png/cc0000/ffffff"},
{"id":14,"name":"Olvan","gender":"Male","image":"http://dummyimage.com/207x100.png/ff4444/ffffff"},
{"id":15,"name":"Malory","gender":"Female","image":"http://dummyimage.com/155x100.png/dddddd/000000"},
{"id":16,"name":"Nichole","gender":"Female","image":"http://dummyimage.com/181x100.png/5fa2dd/ffffff"},
{"id":17,"name":"Talbot","gender":"Male","image":"http://dummyimage.com/244x100.png/cc0000/ffffff"},
{"id":18,"name":"Merill","gender":"Male","image":"http://dummyimage.com/248x100.png/cc0000/ffffff"},
{"id":19,"name":"Bert","gender":"Female","image":"http://dummyimage.com/128x100.png/cc0000/ffffff"},
{"id":20,"name":"Bennett","gender":"Male","image":"http://dummyimage.com/223x100.png/5fa2dd/ffffff"}]


function displayUsers(){
    //alert("GA")
    let rows=""

    users.forEach((user)=>{
      rows+=`<tr>
      <td>${user.id}</td>
      <td>${user.name.toUpperCase()}</td>
      <td>${user.gender}</td>
      <td>${user.image}</td>
      </tr>`
    })

    /*for (user of users){
      rows+=`<tr>
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.gender}</td>
      <td>${user.image}</td>
      </tr>`
    }*/
    document.getElementById("apiData").innerHTML=rows
}

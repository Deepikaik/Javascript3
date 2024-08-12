let users=[ {eid:101,ename:"Rahul",esal:45000},
    {eid:102,ename:"Rajesh",esal:55000},
    {eid:103,ename:"sonia",esal:65000},
    {eid:104,ename:"sunil",esal:75000},
    {eid:105,ename:"raj",esal:45000}
]


function getUsers(){
    console.log("Test")
    
         let rows="";
        let i=0;
        while(i<=users.length-1){
                rows=rows+`<tr>
                        <td>${users[i].eid}</td>
                        <td>${users[i].ename}</td>
                        <td>${users[i].esal}</td>
                        </tr>`
         
            i++;
            
            }
            
        
      
        
    document.getElementsByTagName("tbody")[0].innerHTML=rows
}
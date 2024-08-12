//wap js code snippet to display emp data in the form html table

let employees=[
    {id:101,name:'Rahul',sal:45000},
    {id:102,name:'Sonia',sal:55000},
    {id:103,name:'modi',sal:65000}
]


function getEmployees(){
    let rows=""
    for (let i=0;i<=employees.length-1;i++){
        rows=rows+`<tr>
        <td>${employees[i].id}</td>
        <td>${employees[i].name}</td>
        <td>${employees[i].sal}</td>
        </tr>`
    }
    document.getElementsByTagName("tbody")[0].innerHTML=rows

}






/*for (emp of employees)                                string literal ${emp.id}
    {
     rows= rows+`<tr><td>${emp.id}</td>                                    
                    <td>${emp.name}</td>
                    <td>${emp.sal}</td>
                </tr>`
    }*/
    




/*
for (let i=0;i<=employees.length-1;i++)
{
    rows=rows+`<tr>
    <td>${employees[i].id}</td>
    <td>${employees[i].name}</td>
    <td>${employees[i].sal}</td>
    </tr>`
}



while(i<=employees.length-1)
{
    rows=rows+`<tr>
    <td>${employees[i].id}</td>
    <td>${employees[i].name}</td>
    <td>${employees[i].sal}</td>
    </tr>`
    i++
}*/



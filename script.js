let leads = [];


function login(){

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;


    if(user==="admin" && pass==="admin123"){

        document.querySelector(".login-box").style.display="none";

        document.getElementById("dashboard")
        .classList.remove("hidden");

        alert("Login Successful");

    }

    else{

        alert("Invalid Login");

    }

}



function addLead(){

    let lead={

        name:document.getElementById("name").value,

        email:document.getElementById("email").value,

        source:document.getElementById("source").value,

        status:document.getElementById("status").value,

        notes:document.getElementById("notes").value

    };


    leads.push(lead);

    displayLeads();


    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("source").value="";
    document.getElementById("notes").value="";


}



function displayLeads(){

let table="";


leads.forEach((lead,index)=>{


table += `

<tr>

<td>${lead.name}</td>

<td>${lead.email}</td>

<td>${lead.source}</td>

<td>${lead.status}</td>

<td>${lead.notes}</td>


<td>

<button class="delete-btn"
onclick="deleteLead(${index})">
Delete
</button>

</td>


</tr>

`;

});


document.getElementById("leadTable").innerHTML=table;


}



function deleteLead(index){

    leads.splice(index,1);

    displayLeads();

}



function searchLead(){

let value=document
.getElementById("search")
.value
.toLowerCase();


let rows=document.querySelectorAll("#leadTable tr");


rows.forEach(row=>{

    row.style.display =
    row.innerText.toLowerCase()
    .includes(value)
    ? ""
    :"none";

});


}

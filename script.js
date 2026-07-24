const API_URL = "http://localhost:5000/api/leads";


// Admin Login
function login(){

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user === "admin" && pass === "admin123"){

        document.querySelector(".login-box").style.display = "none";

        document.getElementById("dashboard")
        .classList.remove("hidden");

        loadLeads();

        alert("Login Successful");

    }
    else{
        alert("Invalid Login");
    }
}


// Add Lead
async function addLead(){

    let lead = {

        name: document.getElementById("name").value,

        email: document.getElementById("email").value,

        source: document.getElementById("source").value,

        status: document.getElementById("status").value,

        notes: document.getElementById("notes").value

    };


    await fetch(API_URL,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(lead)
    });


    alert("Lead Added Successfully");

    loadLeads();


    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("source").value="";
    document.getElementById("notes").value="";

}


// Display Leads
async function loadLeads(){

    let response = await fetch(API_URL);

    let leads = await response.json();


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
        <button class="delete-btn">
        Delete
        </button>
        </td>

        </tr>

        `;

    });


    document.getElementById("leadTable").innerHTML = table;

}


// Search Lead
function searchLead(){

    let value =
    document.getElementById("search")
    .value
    .toLowerCase();


    let rows =
    document.querySelectorAll("#leadTable tr");


    rows.forEach(row=>{

        row.style.display =
        row.innerText.toLowerCase()
        .includes(value)
        ? ""
        :"none";

    });

}

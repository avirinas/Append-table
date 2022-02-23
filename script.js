"use strict"

var nameValue = document.getElementById("nameValue");
var addRow = document.getElementById("addRow");
var surnameValue = document.getElementById("surnameValue");
var removeFirstRow = document.getElementById("removeFirstRow");
var ageValue = document.getElementById("ageValue");
var removeLastRow = document.getElementById("removeLastRow");
var tbody = document.getElementById("tbody");

addRow.addEventListener("click", function(){
    if(nameValue.value && surnameValue.value && ageValue.value > 0){
    var tr = document.createElement("tr");
    tr.innerHTML =
     `
     <td> ${nameValue.value} </td>
     <td> ${surnameValue.value} </td>
     <td> ${ageValue.value} </td>
     `;
    tbody.append(tr);  
    nameValue.value = "";
    surnameValue.value = "";
    ageValue.value = "";
    } else if (ageValue.value <= 0){
        alert("Taisingai įveskite amžių")
    }
     else if(nameValue.value || surnameValue.value || ageValue.value) {
        alert("Prašome įvesti visus duomenis")
    } else {
        alert("Nėra įvestų duomenų")
    }
});

removeLastRow.addEventListener("click",function(){
    var tr = document.getElementsByTagName("tr");
    if(tr.length > [1] ){
        //istrina paskutini
        tr[tr.length - 1].remove();
    } else {
        alert("Nebėra eilučių, kad pašalintumėme");
    }
});

removeFirstRow.addEventListener("click",function(){
    var tr = document.getElementsByTagName("tr");
    if(tr.length > [1] ){
        tr[1].remove();
    } else {
        alert("Nebėra eilučių, kad pašalintumėme");
    }
});

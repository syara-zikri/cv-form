const API =
"https://script.google.com/macros/s/URL_ANDA/exec";



fetch(API+"?action=form")

.then(r=>r.json())

.then(fields=>{


let form =
document.getElementById("form");



fields.forEach(f=>{


let label =
document.createElement("label");


label.innerHTML =
f.label;



let input;


if(f.type=="textarea"){


input =
document.createElement("textarea");


}

else{


input =
document.createElement("input");


input.type=f.type;


}



input.name=f.label;



form.appendChild(label);

form.appendChild(input);



});



let btn =
document.createElement("button");


btn.innerHTML="Kirim";


form.appendChild(btn);



});





document
.getElementById("form")
.addEventListener(
"submit",
function(e){


e.preventDefault();



let data =
Object.fromEntries(
new FormData(this)
);



fetch(API,{

method:"POST",

body:
JSON.stringify(data)

})

.then(()=>{


document
.getElementById("status")
.innerHTML=
"Data berhasil dikirim";


});



});
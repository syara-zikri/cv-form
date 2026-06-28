const API =
"https://script.google.com/macros/s/AKfycbwBDSRJHHdBBgg_XyetgCTVqXszaPuBLtimpFzB5cWnaYbnGRN3oU1Fh5nIxXQqSWY/exec";


window.onload=function(){


fetch(API+"?action=form")


.then(response=>response.json())


.then(fields=>{


let form =
document.getElementById("form");



fields.forEach(f=>{


let label =
document.createElement("label");


label.innerHTML=f.label;



let input;


if(f.type=="textarea"){


input=document.createElement("textarea");


}else{


input=document.createElement("input");


input.type=f.type;


}



input.name=f.label;



form.appendChild(label);

form.appendChild(input);


});



let button =
document.createElement("button");


button.innerHTML="Kirim";


form.appendChild(button);



})


.catch(error=>{


document.getElementById("form")
.innerHTML =
"Form gagal dimuat: "+error;


});


}
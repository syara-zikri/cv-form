const API =
"https://script.google.com/macros/s/AKfycbwBDSRJHHdBBgg_XyetgCTVqXszaPuBLtimpFzB5cWnaYbnGRN3oU1Fh5nIxXQqSWY/exec";



function simpan(){



let data={


label:
document.getElementById("label").value,


type:
document.getElementById("type").value,


required:
document.getElementById("required").value,


order:
document.getElementById("order").value



};



fetch(
API+"?mode=admin",
{


method:"POST",


body:
JSON.stringify(data)


})


.then(()=>{


document
.getElementById("hasil")
.innerHTML=
"Pertanyaan berhasil ditambahkan";


});



}

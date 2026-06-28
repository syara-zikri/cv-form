const url =
"https://script.google.com/macros/s/AKfycbwBDSRJHHdBBgg_XyetgCTVqXszaPuBLtimpFzB5cWnaYbnGRN3oU1Fh5nIxXQqSWY/exec";


document
.getElementById("cvForm")
.addEventListener(
"submit",
function(e){


e.preventDefault();



let data =
Object.fromEntries(
new FormData(this)
);



fetch(url,{

method:"POST",

body:
JSON.stringify(data)

})

.then(()=>{


document
.getElementById("status")
.innerHTML =
"Data berhasil dikirim";


});


});
const url =
"1strmT0mQJSb0QVCXb2I28Z1wb1XPttlXpaqBEL2sRXU";


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
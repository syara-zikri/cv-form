const url =
"AKfycbxecZCfA75YFvGRUnTYolcBhCLVCRl6GvUAm_Jk7pQ6M1J0M94oVOWz6Fi_rnxDGQOL";


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


fetch(url,{

method:"POST",

body:
JSON.stringify(data)

})


.then(()=>{

alert(
"Data berhasil dikirim"
);


});


});
let button = document.getElementById("btn")

button.addEventListener("mouseleave", () => {
    // alert("I was clicked!")
    document.querySelector(".box").innerHTML=
    "<i> hey you are clicked</i> yayyy"



})


document.addEventListener("keydown", (e) => {
    // alert("I was clicked!")
    console.log(e,e.key,e.keyCode)

})



// button.addEventListener("mouseleave", () => {
//     alert("I was clicked!")

// })
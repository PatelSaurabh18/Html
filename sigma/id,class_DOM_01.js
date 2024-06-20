console.log("Saurabh");

let boxes=document.getElementsByClassName("box")
console.log(boxes)

boxes[3].style.backgroundColor="red";



document.getElementById("saurabh").style.backgroundColor="green";

// x.style.backgroundColor="green";

document.querySelector("#saurabh").style.border="5px dotted green";


console.log(document.querySelectorAll(".box"));

let a = document.querySelectorAll(".box");


a.forEach(element => {
    element.style.backgroundColor="orange";
});





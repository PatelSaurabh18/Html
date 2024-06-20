
// let a= document.getElementsByClassName("box");



console.log("Hello")

// let a = document.querySelectorAll(".box")

// a.forEach(e => {
//     console.log(e)
   
// });



// let ran=Math.random();
// console.log(ran)
// ran=Math.ceil(ran*255);
// console.log(ran)

// let rand1=Math.ceil(Math.random()*255);
// let rand2=Math.ceil(Math.random()*255);
// let rand3=Math.ceil(Math.random()*255);

// console.log(rand1,rand2,rand3)




// let a = document.querySelectorAll(".box");


// a.forEach(element => {
//     // element.style.backgroundColor="orange";

//     // element.style.backgroundColor=rgb(rand,rand,rand);

//     element.style.backgroundColor=`rgb(${rand1} ${rand2} ${rand3})`

// });

// let a = document.querySelectorAll(".box")


// for(let i=0;i<5;i++)
//     {
//         a[i].style.backgroundColor=`rgb(${rand1} ${rand2} ${rand3})`
//     }

let boxes=document.querySelector(".container").children

function getRandomColor()
{
    let rand1=Math.ceil(0+Math.random()*255);
    let rand2=Math.ceil(0+Math.random()*255);
    let rand3=Math.ceil(0+Math.random()*255);

    return `rgb(${rand1} ${rand2} ${rand3})`
}


Array.from(boxes).forEach (e=>{
    e.Style.backgroundColor=getRandomColor()
    e.Style.color=getRandomColor()
    e.Style.backgroundColor=get
      
})



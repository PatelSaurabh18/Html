

let ran = Math.random()



let a = prompt("Enter a no. :")
let b = prompt("Enter a second number : ")
let c = prompt("Enter operation")


let obj =
{
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"

}


if (ran > (0.1)) {

    // console.log(`the answer is ${a} ${c} ${b}`)

    // alert(`the answer is ${a} ${c} ${b}`)

    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)



}


else {
    

    c=obj[c];

    // console.log(`the answer is ${a} ${c} ${b}`)

    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)

    // alert(`the answer is ${a} ${c} ${b}`)



}
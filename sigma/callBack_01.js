
// console.log("Saurabh is a hacker")


// let a = function (a,b) {
//     console.log("hi",(a+b))

// }
// a(2,3)



// setTimeout(() => {
//     console.log("inside Timeout")
// }, 2000);

// setTimeout(() => {
//     console.log("inside timeout 2")
// }, 0);

// console.log("End")




// const f2 = (arg)=>
//     {
//         console.log(arg)
//     }

// const f1 = (arg,f2) => {
//     f2("Hi")
//     console.log(arg)
// }

// const a = f1("Saurabh !",f2)
















const f1 = (arg) => {
    console.log(arg)
}

const callback = (arg1, arg2) => {
    f1("hello")
    console.log(arg1 + arg2)
}


const loadScript = (src, callback) => {
    let sc = document.createElement("script")
    sc.src = src;
    sc.onload = callback("Saurabh", "patel")
    document.head.append(sc)
}

//passing a fn as a variable is called as callback

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)




// console.log("Hello! , My name is Saurabh")

// console.log('saurabh');
// alert("hello")

//promise

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        reject("No random was'nt supporting 1 ");

    }

    else {
        setTimeout(() => {
            console.log('yes i am done')
            resolve("saurabh")
        }, 400);
    }

})


let prom2 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        reject("No random was'nt supporting 2 ");

    }

    else {
        setTimeout(() => {
            console.log('yes i am done 2')
            resolve("saurabh 2")
        }, 500);
    }

    
})
// prom1.then((a) => {
//     console.log(a);
// }).catch((err)=>{
//     console.log(err)


// })

let p3 = Promise.all([prom1, prom2])
p3.then((a) => {
    console.log(a)
}).catch((err)=>{
    console.log(err);
    
})
//simple wali ahi


// let p3 = Promise.race([prom1, prom2])
// p3.then((a) => {
//     console.log(a)
// }).catch((err)=>{
//     console.log(err);
    
// })
//kam time wala aphle chalega jo tej aayega wahi pahle resolve hoga



// let p3 = Promise.allSettled([prom1, prom2])
// p3.then((a) => {
//     console.log(a)
// }).catch((err)=>{
//     console.log(err);
    
// })
//it is used when we always want a answer

   








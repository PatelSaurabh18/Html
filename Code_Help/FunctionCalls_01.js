
// function greet()
// {
//     console.log("Greeting for the day!")
// }

// function greetMe(greet, fullName)
// {
//     console.log("Hello",fullName)
//     greet()
// }

// greetMe(greet,"saurabh Singh Patel")




//Function inside Function

// function solve(number)
// {
//     return function(number)
//     {
//         return number*number
//     }
    
// }

// let a = solve(5)
// console.log(a(10));






// const arr = [
//     function(a,b)
//     {
//         return a+b
//     },

//     function(a,b)
//     {
//         return a-b
//     }, 

//     function(a,b)
//     {
//         return (a*b)
//     }
// ];

// let first= arr[1];
// let ans=first(5,10)
// console.log(ans)



// let obj= {
//     age:20,
//     wt:80,
//     greet:()=> {
//         console.log("Hello Duniya")
//     }

// }

// console.log(obj.age)
// console.log(obj.wt)
// let func = obj.greet
// func()

let arr = [ 
    1,2,{
        name:"saurabh",
        rn:36
    },

    {
        names:["saurabh","ritesh","raunak"]
    }
];

arr.forEach(element => {
    console.log(element);
    
});


console.log(Array.from("SAURABH"));


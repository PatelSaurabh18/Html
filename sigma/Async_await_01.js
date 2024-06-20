

// function getData() {
//     return new Promise((reslove, reject) => {
//         setTimeout((e) => {
//             reslove(455)
//         }, 3000);
//     })
// }


// console.log('loading module');
// console.log('Do Somethine Else');
// console.log('load Data');


// let data = getData()

// data.then((v) => {
//     console.log(data);
//     console.log('Process Data');
// })

// first Approach using then method




async function getData() {

    //simulate getting data from a server
    return new Promise((reslove, reject) => {
        setTimeout((e) => {
            reslove(455)
        }, 3000);
    })
}

async function main()
{

console.log('loading module');
console.log('Do Somethine Else');
console.log('load Data');

let data = await getData()

console.log(data);
console.log('Process Data');

}

main();



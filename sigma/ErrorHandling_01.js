

let a = prompt("Enter First number:");

let b = prompt("Enter Second number: ");

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is'nt allowed");
}

let c = parseInt(a) + parseInt(b);

function hello() {
    try {
        console.log(`sum is ${eval(sum*x)}`);
        // console.log(`Sum is ${c}`)
        // return c;
    } catch (error) {
        console.log("An error accured")
        return -1;
    }
    finally {
        console.log("Hello");
    }

}

// finally is used in case of returning a value inside
// of a function , after returning value finally
// does the remaining work

let ans = hello();
console.log(ans);

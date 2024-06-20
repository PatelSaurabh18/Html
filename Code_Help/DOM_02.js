
// let obj = document.querySelector("#box");
// undefined
// obj
// <div id=​"box">​ Box ​</div>​
// let ele = document.createElement("pre");
// undefined
// ele.innerHTML="Teri ma ki chu....";
// 'Teri ma ki chu....'
// ele
// <pre>​Teri ma ki chu....​</pre>​
// obj.insertAdjacentHTML("afterbegin",ele);
// undefined



// let obj = document.querySelector("#box");

// undefined
// let ele = document.createElement('e');

// undefined
// ele.innerHTML="
// VM4752:1 Uncaught SyntaxError: Invalid or unexpected tokenUnderstand this error
// ele.innerHTML="Teri ma ki chu....";
// 'Teri ma ki chu....'
// ele
// <e>​Teri ma ki chu....​</e>​
// obj.insertAdjacentElement("afterbegin",ele);
// <e>​Teri ma ki chu....​</e>​
// obj.removeChild('e');
// VM4966:1 Uncaught TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
//     at <anonymous>:1:5
// (anonymous) @ VM4966:1Understand this error
// obj.removeChild(e);
// VM5031:1 Uncaught ReferenceError: e is not defined
//     at <anonymous>:1:17
// (anonymous) @ VM5031:1Understand this error
// obj
// <div id=​"box">​<e>​Teri ma ki chu....​</e>​" Box "</div>​
// obj.removeChild(e);
// VM5261:1 Uncaught ReferenceError: e is not defined
//     at <anonymous>:1:17
// (anonymous) @ VM5261:1Understand this error
// let obj2=document.querySelector("#box").firstElementChild;
// undefined
// obj2
// <e>​Teri ma ki chu....​</e>​
// obj.removeChild(obj2);
// <e>​Teri ma ki chu....​</e>​





// let obj= document.querySelector('#box');
// undefined
// obj
// <div id=​"box">​ Box ​</div>​
//     obj.style.backgroundColor='red';
// 'red'
// obj.style.backgroundColor;
// 'red'




// let obj= document.querySelector('#box');;
// undefined
// obj
// <div id=​"box">​ Box ​</div>​
// obj.style.cssText;
// ''
// obj.style.cssText="color:green";
// 'color:green'
// obj.style.cssText="background-color:black; color:white; padding:10px;";
// 'b


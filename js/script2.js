// let number = Number(prompt("Enter the number please:"))
// let a = 0;
// let b = 1;
// let c = 0;
// let message = ""

// for (let i = 0; i < Infinity; i++) {
//     a = b;
//     b = c;
//     c = a + b;
//     if (c > number) {
//         break
//     } else {
//         message += `${c}, `
//     }
// }

// alert(message)

let a = 0;
let b = 1;
let c = 0;


function fib(count) {
    for (let i = 0; i < count; i++) {
        a = b;
        b = c;
        c = a + b;
    }
    alert(c)
}
fib(3)
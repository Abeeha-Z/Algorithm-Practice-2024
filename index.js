// //factorials my code
// function factorial(n) {
//     for(i = 1; i <= n; i++) {
//         x = i*(i+1); 
//         console.log(x)
//     }
// }

// factorial(10);

// //Answer Shown
// function factorial(n) {
// let result = 0
// for(let i =1; i<=n; i++) {
//     result *= i;
// }
// return result
// }
// console.log(factorial(10))

// //Parking Spaces Problem
// function checkSpaces(n, yesterday, today) {
//     for (let i = 0; i < n; i++) {
//         if (yesterday[i] === 'C' && today[i] === 'C') {
//             count++;
//         }
//     }
//     return count;
// }

// console.long(checkSpaces(5, "CC..C", "C..C."));

//Notes: Binary and Hexadecimal
//Read right to left, multiply digit by 2 or 16 to the __ power, starting from 0 up to 7 for binary and 15 for binary
//Hexa: 1A3 - 3 x 16^0 = 3, A = 10 x 16^1 = 160, 1 x 16^2 = 256, total = 419
//Binary: 1 and 0 represent whether somehting exists or doesn't, zero means a blank space, move to the next power of 2
//1101 = 13, because 1 x 2^0 = 1, 0 x 2^1 = 0, 1 x 2^2 = 4, 1 x 2^3 = 8, total = 13

//Convert Binary to Base ten
// function convert(value) {
//     for(let i = 0; i <= 7; i++) {
//         x = value[0]
//         if (x == '1') {
//             x*2**i
//         }
        
//     }
// }
//Answer
//to convert dec to birnary, find value, and divide by 2 until you reach a remainder of 1
 function binarytoDec(binary) {
    let dec = 0;
    for(let i = 0; i < binary.length; i++) {
        if(binary[binary.length - i - 1] === "1") {
            dec += dec + math.pow(2,i);
        }
    return dec
    }
 }
 console.log(binarytoDec("10011"))

 function dectobinary(dec) {
    if (dex === 0) {
        return 0;
    }
    let binary = "";
    while (dec => 1) { 
        let remainder= dec%2;
        binary = remainder + binary;
        dec = Math.floor(dec/2); //round

    }
    return binary
    }

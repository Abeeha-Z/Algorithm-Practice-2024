//factorials my code
function factorial(n) {
    for(i = 1; i <= n; i++) {
        x = i*(i+1); 
        console.log(x)
    }
}

factorial(10);

//Answer Shown
function factorial(n) {
let result = 0
for(let i =1; i<=n; i++) {
    result *= i;
}
return result
}
console.log(factorial(10))

//Parking Spaces Problem
function checkSpaces(n, yesterday, today) {
    for (let i = 0; i < n, i++) {
        if (yesterday[i] === 'C' && today[i] === 'C') {
            count++;
        }
    }
    return count;
}

console.long(checkSpaces(5, CC..C, "C..C."));


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


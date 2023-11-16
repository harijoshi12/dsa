// time complexity - o(2^n)
// space complexity - o(n)
const fib =(n)=>{
    if(n<=2) return 1;
    return fib(n-1) + fib(n-2)
}

// console.log(fib(6))
// console.log(fib(7))
// console.log(fib(8))
// console.log(fib(45))

//fib memoised
// time complexity - o(n)
// space complexity - o(n)
const fibMemo= (n, memo = {})=>{
    if(n in memo) return memo[n]
    if(n<=2) return 1
    memo[n] = fibMemo(n-1, memo) +fibMemo(n-2, memo)
    return memo[n]
}
// console.log(fibMemo(1000))
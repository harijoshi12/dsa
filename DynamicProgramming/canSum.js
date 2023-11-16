// write a function 'canSum(targetSum, numbers)' that takes in a  targetSum and an array of numbers as arguments.

// the funtion should return a boolean indication whether or not it is possible to generate the targetSum using numbers from the array.

// you may use an element of the array as many times as needed.
// you may assume that all input numbers are nonnegative

// n is length of array (numbers)
// time complexity o(n^m),because for each node there are n childs.
// time complexity o(m) height of tree, if first num is 1;

const canSum = (targetSum, numbers) => {
    if (targetSum == 0) return true;
    if (targetSum < 0) return false;
    for (let num of numbers) {
        const remainder = targetSum - num
        console.log(targetSum, " - ", num, "= ", remainder)
        if (canSum(remainder, numbers) == true) {
            return true
        }
    }
    return false
}

// console.log(canSum(25,[2,7,14]))

// time compexity - o(m*n), space comp. - o(m)
const canSumMemo = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum == 0) return true;
    if (targetSum < 0) return false;
    for (let num of numbers) {
        const remainder = targetSum - num
        console.log(targetSum," - ", num, "= ", remainder )
        if (canSumMemo(remainder, numbers, memo) == true) {
            memo[targetSum] = true
            return true
        }
    }
    memo[targetSum] = false
    return false
}
// console.log(canSumMemo(300, [7, 14]))
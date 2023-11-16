// Q:- say yor are a traveler on a 2D grid. you begin in the top-left corner and your goal is to travel to the bottom0right corner. you mauy only move down or right.

// In how many ways can you travel to the goal on a grid with dimenssions m*n?

// write a funtioin 'gridTraveler(m,n) that calculates this;

// time complexity - o(2^(m+n))
// space complexity - o(m+n) height of tree
const gridTraveler = (m, n) => {
    if (m == 0 || n == 0) {
        return 0;
    }
    if (m == 1 || n == 1) {
        return 1;
    }
    let rights = gridTraveler(m, n - 1)
    let downs = gridTraveler(m - 1, n)
    return rights + downs;
}
// console.log(gridTraveler(15,15))

// memoised
// time complexity - o(m*n)
// space complexity - o(n+m)
const gridTravelerMemo = (m, n, memo = {}) => {
    const key = m + "," + n
    // const revKey = n + "," + m
    if (key in memo) return memo[key]
    // if (revKey in memo) return memo[revKey]
    if (m == 0 || n == 0) return 0;

    if (m == 1 || n == 1) return 1;

    let rights = gridTravelerMemo(m, n - 1, memo)
    let downs = gridTravelerMemo(m - 1, n, memo)
    memo[key] = rights + downs;
    return memo[key]
}
console.log(gridTravelerMemo(20, 20))
class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(3) 
const b = new Node(5)
const c = new Node(2)
const d = new Node(6)
const e = new Node(1)
const f = new Node(8)
//    3
//   / \
//   5  2
//  / \  \
// 6   1  8
// const a = new Node('a') 
// const b = new Node('b')
// const c = new Node('c')
// const d = new Node('d')
// const e = new Node('e')
// const f = new Node('f')

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

//    a
//   / \
//   b  c
//  / \  \
// d   e  f

// ******************************************* //
// depth first traversal, implimented using stack
// a-b-d-e-c-f

const depthFirsVals = (root)=>{
    if(root==null) return [] 
    const stack = [root]
    const result = []
    while(stack.length>0){
        const curr = stack.pop()
        result.push(curr.val)
        if(curr.right) stack.push(curr.right)
        if(curr.left) stack.push(curr.left)
    }
    return result;
}
// console.log(depthFirsVals(a))

const depthFirsValsRecursive = (root)=>{
    if(root==null){
        return [];
    }
    const leftVals = depthFirsValsRecursive(root.left)
    const rightVals = depthFirsValsRecursive(root.right)
    return [root.val, ...leftVals, ...rightVals]
}
// console.log(depthFirsValsRecursive(a)) 


// ******************************************* //
// breadth first traversal, implemented using queue
// a-b-c-d-e-f

const breadthFirstVals = (root)=>{
    if(root==null) return []
    const vals = []
    const queue =[root]
    while(queue.length>0){
        const curr = queue.shift()
        vals.push(curr.val)
        if(curr.left!=null) queue.push(curr.left)
        if(curr.right!=null) queue.push(curr.right)
    }
    return vals
}
// console.log(breadthFirstVals(a))

const treeInclude = (root, target)=>{
    if(root==null) return false
    const queue = [ root]
    while(queue.length>0){
        const curr = queue.shift()
        if(curr.val == target) return true
        if(curr.left) queue.push(curr.left)
        if(curr.right) queue.push(curr.right)
    }
    return false;
}
// console.log(treeInclude(a,"d"))

const treeIncludeRecursive = (root, target)=>{
    if(root==null) return false
    if(root.val==target) return true
    return treeIncludeRecursive(root.left, target) || treeIncludeRecursive(root.right, target)
}
// console.log(treeIncludeRecursive(a, 'f'))

// breadth first
const treeSumB = (root)=>{
    if(root==null) return 0;
    const queue = [root]
    let sum =0;
    while(queue.length>0){
        const curr = queue.shift()
        sum+=curr.val
        if(curr.left) queue.push(curr.left)
        if(curr.right) queue.push(curr.right)
    }
    return sum;
}
// console.log(treeSum(a))

// depth first
const treeSumD = (root)=>{
    if(root==null) return 0
    const stack = [root]
    let sum = 0;
    while(stack.length>0){
        const curr = stack.pop()
        sum+=curr.val;
        if(curr.left) stack.push(curr.left)
        if(curr.right) stack.push(curr.right)
    }
    return sum;
}

// console.log("d",treeSumD(a))

const treeSumRecursive = (root)=>{
    if(root==null) return 0;
    return (root.val + treeSumRecursive(root.left) + treeSumRecursive(root.right))
}
// console.log("r = ",treeSumRecursive(a))

const minTreeRecursive = (root)=>{
    if(root==null) return Infinity;
    return Math.min(minTreeRecursive(root.left), minTreeRecursive(root.right), root.val)
}
// console.log("r =",minTreeRecursive(a))

const minTreeD = (root)=>{
    let min = Infinity
    const stack = [root]
    while(stack.length>0){
        const curr = stack.pop()
        min = Math.min(min, curr.val)
        if(curr.left) stack.push(curr.left)
        if(curr.right) stack.push(curr.right)
    }
    return min;
}
// console.log("d = ", minTreeD(a))

const minTreeB = (root)=>{
    let min = Infinity
    const queue = [root]
    while(queue.length>0){
        const curr = queue.shift()
        min = Math.min(min, curr.val)
        if(curr.left) queue.push(curr.left)
        if(curr.right) queue.push(curr.right)
    }
    return min;
}
// console.log("b = ", minTreeB(a))

// max root to leaf path sum
const maxPathSum = (root)=>{
    // if(root==null) return 0
    // or
    // ******
    if(root==null) return -Infinity
    if(root.left ==null && root.right ==null) return root.val;
    // ******
    return root.val + Math.max(maxPathSum(root.left), maxPathSum(root.right))
}
console.log("m = ", maxPathSum(a))
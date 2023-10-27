class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

const a = new Node(2)
const b = new Node(6)
const c = new Node(1)
const d = new Node(4)

a.next = b;
b.next = c;
c.next = d;

const p = new Node(10)
const q = new Node(13)
// const r = new Node(15)
// const s = new Node(9)

p.next = q;
// q.next = r;


// A --> B --> C --> D -->NULL

const printLLIterative = (head)=>{
    let curr = head;
    while(curr!=null){
        console.log(curr.val)
        curr= curr.next
    }
}
const printLLRecursive=(head)=>{
    if(head==null){
        return
    }
    console.log(head.val)
    printLLIterative(head.next)
}

// printLLRecursive(a)

const llArray = (head)=>{
    const vals =[]
    let curr = head;
    while(curr!=null){
        vals.push(curr.val)
        curr = curr.next;
    }
    console.log(vals)
}
const llArrayRecursive = (head)=>{
    const vals =[]
    llHelper(head, vals)
    console.log(vals)
}
const llHelper = (head, vals)=>{
    if(head==null){
        return
    }
    vals.push(head.val)
    llHelper(head.next, vals)
}
// llArrayRecursive(a)

const llSum=(head)=>{
    if(head==null){
        return;
    }
    let curr = head;
    let sum = 0;
    while(curr!=null){
        sum+=curr.val
        curr = curr.next
    }
    console.log(sum)
}
const llSumRecursive = (head)=>{
    if(head.next==null){
        return head.val;
    }
    return head.val+ llSumRecursive(head.next)
}

// console.log("re = ",llSumRecursive(a));

const findIdx = (head, target)=>{
    let curr = head;
    let idx =0;
    while(curr!=null){
        if(curr.val == target){
            return idx
        }
        idx++
        curr = curr.next;
    }
}

// let ans =findIdx(a, 2)
// console.log("find itr = ", ans)

const findIdxRecursive =(head, target)=>{
   let ans  = findIdxHelper(head, target, 0)
    console.log("find = ",ans)
}
const findIdxHelper = (head, target, idx)=>{
    if(head== null){
        return -1;
    }
    if(head.val ==target){
        return idx
    }
    return findIdxHelper(head.next, target, idx+1)
}

// findIdxRecursive(a,4)

const  findTargetgivenIdx = (head, idx)=>{ 
    let curr = head;
    let count = 0
    while(count++<idx && curr!=null){
        curr = curr.next;
    }
    if(curr!=null){
        console.log("fbi",curr.val)
    }else{
        console.log("not found")
    }
}

// findTargetgivenIdx(a,1)

const  findTargetgivenIdxRecursive = (head, idx)=>{
    return findTargetgivenIdxHelper(head, idx, 0)
    if(head==null){
        return "not found"
    }
    if(idx ==0){
        return head.val
    }
    return findTargetgivenIdxRecursive(head.next, idx-1)
}
const findTargetgivenIdxHelper =(head, idx, count)=>{
    if(head == null){
        return "not found";
    }
    if(idx==count){
        return head.val
    }
    return findTargetgivenIdxHelper(head.next, idx, count+1)
}

// console.log("rec = ",findTargetgivenIdxRecursive(a,1))

const revItrative = (head)=>{
    let curr = head, prev= null

    while(curr!=null){
        let temp = curr.next;
        curr.next = prev;
        prev = curr
        curr = temp
    }
    return prev
}
// printLLIterative(revItrative(a))

const revRecursive=(head)=>{
    if(head==null || head.next==null){
        return head
    }
    
    let revhead = revRecursive(head.next)
    head.next.next = head;
    head.next = null
    return revhead    
}
// console.log("rev")
// printLLRecursive(revRecursive(a))

const zipperList = (head1, head2)=>{
    if(!head1) return head2
    if(!head2) return head1
    let  t1= head1, t2 = head2
    while(t1!=null && t2 !=null){
        console.log("running")
        let temp1 = t1.next;
        t1.next = t2;
        let temp2 = t2.next;
        t1 = temp1;
        if(t1!=null){
            t2.next = t1;
        }
        t2 = temp2;
    }
    return head1;
}

// printLLIterative(zipperList(a,p))

const zipperListRecursive=(head1, head2)=>{
    if(head1==null) return head2
    if(head2==null) return head1
    let  t1= head1, t2 = head2
    let temp1 = t1.next;
    let temp2 = t2.next;
    t1.next = t2
    t2.next = zipperListRecursive(temp1, temp2)
    return head1
}
    printLLIterative(zipperListRecursive(p,a))
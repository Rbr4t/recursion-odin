function fib(n) {
    let arr = [0, 1];
    for(let i=0; i<n-2; i++) {
        let index = arr.length
        arr.push(arr[index-2] + arr[index-1]);
    }
    return arr
}

// console.log(fib(8));

function fibRec(n) {
    if(n<=1) {
        return n;
    }
    return fibRec(n-1) + fibRec(n-2)
}
let arr = []
const n = 8
for(let i=0; i<n; i++){
    
    arr.push(fibRec(i))
}

console.log(fibRec(1))

console.log(arr)
const arrays = [1,2,3,4,5,6,7,8,44]
const newaray = [...arrays]
console.log(newaray)
//also used in functions
function dots(...args){
    return args.reduce((a,b)=>a*b,1);
}
console.log(dots(1,2,3,4))
// output
// [
//   1, 2, 3,  4, 5,
//   6, 7, 8, 44    
// ]
const arrayz = [1,2,3,4,5,6,7,8,44]
console.log(...arrayz)//1 2 3 4 5 6 7 8 44
var nums = [1,2,3];
function add(a,c,d){
    console.log(`the sum is ${a+c+d}`);
}
add(...nums)
const arr = [1,2,3,4,5,6,7,8,9,10]

const values = arr.reduce(val)
console.log(values)

function val(acc,prev){
    return acc + prev
}


const values1 = arr.reduce((acc1,prev1)=>{
    return acc1 + prev1
})
console.log("same as ",values1)

function val(acc,prev){
    return acc + prev
}

const maxs = (start,end) => {
    return Math.max(start,end)
}

const maximum = arr.reduce(maxs)

console.log(maximum)


const arr1 = [79,10,76,93,97,46,90,7984]
const max2 = arr1.reduce((a,c)=>{
    return Math.max(a,c)
})
console.log(max2)
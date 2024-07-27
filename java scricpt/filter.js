const arr = [1,2,3,4,5,6,7,8,9,10]

const even_nums = arr.filter((num)=>{
    if (num %2 == 0){
        return num;
    }
})
console.log(even_nums)

const even_nums1 = arr.filter((num)=>num %2 != 0)
console.log(even_nums1)


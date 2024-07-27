const marks = [
    {name:"muuo",marks:90},
    {name:"mo",marks:70},
    {name:"uuo",marks:80},
    {name:"muu",marks:60},
    {name:"muo",marks:40},
]

const passed = marks.every((pass)=>{
    return pass.marks > 50
})

console.log(passed)


const somepass = marks.some((pass1)=>{
    return pass1.marks > 70
})

console.log(somepass)
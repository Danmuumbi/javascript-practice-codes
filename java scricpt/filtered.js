const arr = [
    {name: "muuo", marks: 90},
    {name: "mutua", marks: 80},
    {name: "muuuo", marks: 30},
    {name: "muo", marks: 56},
    {name: "mue", marks: 45}
  ];

  const filtered = arr.filter((mark)=>{
    return mark.marks > 50
  })
  console.log(filtered)

  const percent = arr.map((perce)=>{
    perce.marks = perce.marks * perce.marks/100
    return perce
  })

  console.log("percentage is ",percent)

  const total = arr.reduce((tot,all)=>{
    tot =tot + all.marks
    return tot
  },0)
  console.log("total marks is ",total)
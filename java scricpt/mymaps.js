let mymap =  new Map()

mymap.set ("name","mutua")
mymap.set ("name1","muuo")

console.log(mymap)

console.log(mymap.get("name"))

for (let [val,keys] of mymap){
    console.log(`${val} = ${keys}`)
}


var names = new Set();

names.add("muuo").add("mutua").add("mulige").add("muvoye");
console.log(names.size);
console.log(...names);
console.log(names.delete("muuo"));
console.log(names.size);
console.log(...names);
console.log(names.clear);
console.log(`nothing to output now ${names}`);
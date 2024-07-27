function myfunct(a,c){
    console.log(`the sum is ${a+c}`);
}
myfunct(1,2)

//it can be simplified to:
var myfunct = (a,c)=>{
    console.log(`the sum is ${a+c}`);
}
myfunct(1,2)
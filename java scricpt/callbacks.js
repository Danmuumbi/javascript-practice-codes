function cook(callback) {
    setTimeout(() => {
        console.log ("you cooked food")
        callback()
    }, 1500);
    
}
function clean(callback) {
    setTimeout(() => {
        console.log("you swept");
        callback()
    }, 1500);
    
}
cook(()=>{
    clean(()=>
    console.log("you did all the tasks"));
});
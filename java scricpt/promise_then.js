function walkdog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("you walked the dog");
        }, 1500);
    });
}

function cook(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("you cooked");
        }, 2500);
    });
}

function sweep(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("you have swept");
        }, 2000);
    });
}

//use the .then to print them following each other
walkdog().then(value => {console.log(value);return cook()})
.then(value => {console.log(value);return sweep()})
.then(value => console.log(value))
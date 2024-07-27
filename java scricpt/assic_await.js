function dowalk() {
    return new Promise((resolve, reject) => {
        const dogwalked = false;
        if (dogwalked) {
            resolve("the dog walked");
        } else {
            reject("dog did not walk");
        }
    });
}

function pesoneat(){
    return new Promise((resolve, reject) => {
        const personeattrue = true;
        if (personeattrue){
            resolve("human beings eat")
        }
        else{
            reject ("human beings dont eat");
        }
    });
}

async function dogchores() {
    try {
        const result = await dowalk();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

dogchores();

async function humaneats(){
    try{
    const result1 = await pesoneat();
    console.log(result1);
    }catch (error){
        console.log(error);
    }
}
humaneats();
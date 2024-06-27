function callback(good){
    const par = document.querySelector('p')
    par.textContent = good
}

function receivesAFunction(callback){
    callback('great')
}

function returnsANamedFunction(){
    return function innerFunction() {
        return('before')
    }
    
}





function returnsAnAnonymousFunction (){
    return function (){
        return '!'
    }
}
function loop(value, test, update, body){
    for(let i = value; test(i); i = update(i)){
        if(!test(i)){
            return false
        }
        body(i);
    }  
}

loop(3,n => n > 0, n => n - 1, console.log)
// a higher-order function loop that provides something like a for loop statement. 
//It takes a value, a test function, an update function, and a body function. 
//Each iteration, it first runs the test function on the current loop value and stops if that returns false. 
//Then it calls the body function, giving it the current value. 
//Finally, it calls the update function to create a new value and starts from the beginning.

function loop(value, test, update, body){
    for(let i = value; test(i); i = update(i)){
        if(!test(i)){
            return false
        }
        body(i);
    }  
}

loop(3,n => n > 0, n => n - 1, console.log)

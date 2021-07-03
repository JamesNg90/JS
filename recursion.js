// The function should accept a single parameter (a positive, whole number) and return a Boolean.

console.log(iseven(-1));

function iseven(x){
    if (x < 0) {
        return "number requires to be a positive and whole number";
    }

    else if (x == 0) {
        return true;
    }
    
    else if (x == 1) {
        return false;
    }
    
    else {
        return iseven(x - 2);
    } 
}

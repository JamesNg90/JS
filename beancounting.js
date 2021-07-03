// takes a string as its argument and returns a number that indicates how many specified characters there are in the string. 
//takes a second argument that indicates the character that is to be counted.

countChar("abcskfasfBBB",a);

function countChar(string,Char) {
    let result = 0;
    for (let i = 0; i < string.length; i++){
        if (string[i] == Char){
            result++;
        }
    }
console.log(result);
}

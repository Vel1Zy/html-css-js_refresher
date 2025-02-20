// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"


// Solution 1
function toCamelCase(str){
    let res = '';
    let cap = false;
    for(let i = 0 ; i < str.length ; i++ ){
        if(i == 0) res += str[i];
        else {
        if(str[i] == '-' || str[i] == '_') cap = true;
        else if(cap == true) {
            cap = false;
            res += str[i].toUpperCase();
        }else{
            res += str[i];
        }
        }
    }



    return res;
}



  // solution 2
function toCamelCase(str){
var regExp=/[-_]\w/ig;
return str.replace(regExp,function(match){
        return match.charAt(1).toUpperCase();
    });
}
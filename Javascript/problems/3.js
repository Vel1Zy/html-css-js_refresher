// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function solve(petal1, petal2){
    if((petal1%2===0 && petal2%2===1)
        ||
        (petal1%2===1 && petal2%2===0)
    ){
        return true;
    }else{
        return false;
    }
}

//shorter version
function solve2(petal1, petal2){
    return petal1%2 !== petal2%2;
}
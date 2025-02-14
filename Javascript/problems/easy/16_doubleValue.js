// Description:
// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// Solution 1
function maps(x){
    let res = [];
    for(let i=0;i<x.length;i++){
      res.push(x[i] * 2);
    }
    return res;
  }

maps = x => {
    let res = [];
    for (let i=0; i<x.length;i++){
        res.push(x[i] * 2);
    }
    return res;
}

// Solution 2
function maps(x){
    return x.map(n => n * 2);
  }

// Solution 3
maps = x => x.map(e => e * 2);
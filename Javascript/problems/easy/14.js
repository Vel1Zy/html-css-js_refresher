// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// Solution 1
function accum(s) {
	let res = '';
    for(let i=0; i<s.length;i++){
        res += s[i].toUpperCase();
        for(let j=0; j<i; j++){
            res += s[i].toLowerCase();
        }
        res += '-';
    }

    return res;
}

// Solution 2
function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

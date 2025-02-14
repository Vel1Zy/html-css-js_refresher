// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

// Solution 1
function zero(func) { return func ? func(0) : 0; }
function one(func) { return func ? func(1) : 1; }
function two(func) { return func ? func(2) : 2; }
function three(func) { return func ? func(3) : 3; }
function four(func) { return func ? func(4) : 4; }
function five(func) { return func ? func(5) : 5; }
function six(func) { return func ? func(6) : 6; }
function seven(func) { return func ? func(7) : 7; }
function eight(func) { return func ? func(8) : 8; }
function nine(func) { return func ? func(9) : 9; }

function plus(b) { return a => a + b; }
function minus(b) { return a => a - b; }
function times(b) { return a => a * b; }
function dividedBy(b) { return a => Math.floor(a / b); }


// Solution 2

const zero = a => a ? a(0) : 0
const one = a => a ? a(1) : 1
const two = a => a ? a(2) : 2
const three = a => a ? a(3) : 3
const four = a => a ? a(4) : 4
const five = a => a ? a(5) : 5
const six = a => a ? a(6) : 6
const seven = a => a ? a(7) : 7
const eight = a => a ? a(8) : 8
const nine = a => a ? a(9) : 9

const plus = a => b => a + b
const minus = a => b => b - a
const dividedBy = a => b => Math.floor(b / a)
const times = a => b => a * b

// Solution 3
const [zero, one, two, three, four, five, six, seven, eight, nine] = [...Array(10)].map((_, idx) => fn => fn ? fn(idx) : idx);
const [plus, minus, times, dividedBy] = [`+`, `-`, `*`, `/`].map(val => new Function(`b`, `return a => a ${val} b ^ 0`));

// Solution 4
const n = (d) => (f) => f ? f(d) : d
const zero = n(0)
const one = n(1)
const two = n(2)
const three = n(3)
const four = n(4)
const five = n(5)
const six = n(6)
const seven = n(7)
const eight = n(8)
const nine = n(9)

const plus = (f)=>n => n + f
const minus = (f)=>n => n - f
const times = (f)=>n => n * f
const dividedBy = (f)=>n => Math.floor(n / f)
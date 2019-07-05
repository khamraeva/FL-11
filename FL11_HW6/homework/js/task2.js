const a = +prompt('Input the length of the first side');
const b = +prompt('Input the length of the second side');
const c = +prompt('Input the length of the third side');
if (a + b < c || a + c < b || c + b < b) {
	console.log('Triangle doesn’t exist');
} else if (a === b === c) {
	console.log('Equivalent triangle');
} else if (a === b || b === c || a === c) {
	console.log('Isosceles triangle');
} else if (a !== b && b !== c && a !== c) {
	console.log('Normal triangle');
}

const a1 = +prompt('Input value of the point Ax');
const a2 = +prompt('Input value of the point Ay');
const b1 = +prompt('Input value of the point Bx');
const b2 = +prompt('Input value of the point By');
const c1 = +prompt('Input value of the point Cx');
const c2 = +prompt('Input value of the point Cy');
const divider = 2;
if (c1 === (a1 + b1) / divider && c2 === (a2 + b2) / divider) {
	console.log(true);
} else {
	console.log(false);
}

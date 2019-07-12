function pipe() {
	let a = arguments[0];
	for (var i = 1; i < arguments.length; i++) {
		const fn = arguments[i];
		a = fn(a);
	}
	return a;
}
pipe();
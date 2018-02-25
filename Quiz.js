function isEven(num) {
	return num % 2 ===0;
}

function factorial(fact) {
	var result = 1;
	for(var i = 2; i <= fact; i++) {
		result *= i;
	}

	return result;
}

function kebabToSnake(str) {
	var newStr = str.replace(/-/g, "_");
	return newStr;
}
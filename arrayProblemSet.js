function printReverse(arr){
	for(var i = arr.length - 1; i>= 0; i--){
		console.log(arr(i));
	}
}

function isUniform(numArr){
	var first = numArr(0)
	for(var i = 1; i < numArr.length; i++){
		if (numArr(i) !== first){
			return false;
		}
	}
	return true;
}

function sumArray(arr){
	var total = 0;
	arr.foreach(function(element){
		total += element;
	});
	console.log(total);
}

function max(arr){
	var max = 0;
	for(var i = 0; i < arr.length; i++){
		if(arr(i)>max){
			max = arr(i);
		}
	}
	return max;
}
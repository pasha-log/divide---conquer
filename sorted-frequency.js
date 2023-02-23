function sortedFrequency(arr, val) {
	// O(n^2) solution:
	// let count = 0;
	// if (arr.includes(val)) {
	// 	for (let element of arr) {
	// 		if (element === val) {
	// 			count++;
	// 		}
	// 	}
	// 	return count;
	// } else {
	// 	return -1;
	// }

	// O(log n) solution:
	const frequency = countFrequency(arr, val);
	return frequency === 0 ? -1 : frequency;
}

function countFrequency(arr, val) {
	let count = 0;
	let leftIdx = 0;
	let rightIdx = arr.length - 1;
	while (leftIdx <= rightIdx) {
		console.log(leftIdx, rightIdx);

		let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
		let middleVal = arr[middleIdx];
		if (middleVal < val) {
			leftIdx = middleIdx + 1;
			console.log('left', leftIdx);
		} else if (middleVal > val) {
			rightIdx = middleIdx - 1;
			console.log('right', rightIdx);
		} else {
			console.log(leftIdx, rightIdx);
			count++;
			const left = arr.slice(leftIdx, middleIdx);
			const right = arr.slice(middleIdx + 1, rightIdx + 1);
			console.log(left, right);
			return count + (countFrequency(left, val) + countFrequency(right, val));
		}
	}
	return count;
}

module.exports = sortedFrequency;

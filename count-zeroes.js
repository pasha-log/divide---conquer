function countZeroes(arr) {
	// iterative solution:
	// if (Array.isArray(arr)) {
	// 	let count = 0;
	// 	let mid = Math.floor(arr.length / 2);
	// 	let left = arr.slice(0, mid);
	// 	let right = arr.slice(mid);
	// 	left.forEach((num) => {
	// 		if (num === 0) count++;
	// 	});
	// 	if (right.length === 1) {
	// 		return right[0] === 0 ? (count += 1) : count;
	// 	}
	// 	return countZeroes(left) + countZeroes(right);
	// }

	// recursive O(log N) solution
	let count = 0;
	let leftIdx = 0;
	let rightIdx = arr.length - 1;
	while (leftIdx <= rightIdx) {
		let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
		let middleVal = arr[middleIdx];
		if (middleVal > 0) {
			leftIdx = middleIdx + 1;
		} else {
			count++;
			const left = arr.slice(leftIdx, middleIdx);
			const right = arr.slice(middleIdx + 1, rightIdx + 1);
			return count + countZeroes(left) + countZeroes(right);
		}
	}
	return count;
}

module.exports = countZeroes;

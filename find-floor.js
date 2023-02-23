function findFloor(arr, x) {
	// O(n^2) solution:
	// for (let i = arr.length - 1; i >= 0; i--) {
	// 	if (arr[i] <= x) {
	// 		return arr[i];
	// 	}
	// }
	// return -1;

	// O(log n) solution:
	let leftIdx = 0;
	let rightIdx = arr.length - 1;
	while (leftIdx <= rightIdx) {
		console.log(leftIdx, rightIdx);

		let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
		let middleVal = arr[middleIdx];
		if (arr[rightIdx] <= x) {
			return arr[rightIdx];
		} else {
			if (middleVal > x) {
				const left = arr.slice(leftIdx, middleIdx);
				return findFloor(left, x);
			} else {
				return middleVal;
			}
		}
	}
	return -1;
}

module.exports = findFloor;

function findRotationCount(arr) {
	// Non O(log n) solution:
	// const min = Math.min(...arr);
	// return arr.indexOf(min);

	// O(log N) solution:
	const low = 0;
	const high = arr.length - 1;
	let pivot = findPivotCount(arr, low, high);
	return pivot == 1 ? pivot + 1 : pivot;
}

function findPivotCount(arr, low, high) {
	if (high < low) return -1;
	if (high == low) return low;

	let mid = Math.floor((low + high) / 2); /*low + (high - low)/2;*/
	if (mid < high && arr[mid] > arr[mid + 1]) return mid;

	if (mid > low && arr[mid] < arr[mid - 1]) return mid - 1;

	if (arr[low] >= arr[mid]) return findPivotCount(arr, low, mid - 1);

	return findPivotCount(arr, mid + 1, high) + 1;
}

module.exports = findRotationCount;

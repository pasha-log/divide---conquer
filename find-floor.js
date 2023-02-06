function findFloor(arr, x) {
	for (let i = arr.length - 1; i >= 0; i--) {
		if (arr[i] <= x) {
			return arr[i];
		}
	}
	return -1;
}

module.exports = findFloor;

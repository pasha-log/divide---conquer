function sortedFrequency(arr, val) {
	let count = 0;
	if (arr.includes(val)) {
		for (let element of arr) {
			if (element === val) {
				count++;
			}
		}
		return count;
	} else {
		return -1;
	}
}

module.exports = sortedFrequency;

function findRotatedIndex(arr, val) {
	if (arr.includes(val)) {
		for (let element of arr) {
			if (element === val) {
				return arr.indexOf(element);
			}
		}
	} else {
		return -1;
	}
}

module.exports = findRotatedIndex;

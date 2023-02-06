function countZeroes(arr) {
	let zeroCount = 0;
	if (arr.includes(0)) {
		if (arr[0] === arr[arr.length - 1]) {
			return arr.length;
		}
		for (let i = 0; i <= arr.length - 1; i++) {
			if (arr[i] === 0) {
				zeroCount++;
			}
		}
		return zeroCount;
	} else {
		return 0;
	}
}

module.exports = countZeroes;

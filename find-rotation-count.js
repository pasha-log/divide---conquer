function findRotationCount(arr) {
	const min = Math.min(...arr);
	return arr.indexOf(min);
}

module.exports = findRotationCount;

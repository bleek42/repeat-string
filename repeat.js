function repeatedString(s, n) {
	const repeatCalc = Math.trunc(n / s.length);
	const remainder = n % s.length;
	let count = 0;
	let i = 0;
	while (i < s.length) {
		if (s[i] === "a") {
			count++;
			i++;
		}
		i++;
	}
	count *= repeatCalc;
	let j = 0;
	while (j < remainder) {
		if (s[j] === "a") {
			count++;
			j++;
		}
		j++;
	}
	return count;
}

console.log(repeatedString("aba", 10));

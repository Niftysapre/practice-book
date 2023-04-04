const calculateButton = document.querySelector('#calculate');
calculateButton.addEventListener('click', calculateGCD);

function calculateGCD() {
	const number1 = parseInt(document.querySelector('#number1').value);
	const number2 = parseInt(document.querySelector('#number2').value);

	if (isNaN(number1) || isNaN(number2)) {
		document.querySelector('#result').textContent = 'Введите корректные числа';
		return;
	}

	let gcd = findGCD(number1, number2);

	document.querySelector('#result').textContent = 'Наибольший общий делитель чисел ' + number1 + ' и ' + number2 + ': ' + gcd;
}

function findGCD(number1, number2) {
	while (number2 !== 0) {
		let temp = number1 % number2;
		number1 = number2;
		number2 = temp;
	}
	return number1;
}

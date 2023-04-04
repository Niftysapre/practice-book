const calculateButton = document.querySelector('#calculate');
calculateButton.addEventListener('click', calculateCommonDivisors);

function calculateCommonDivisors() {
	const number1 = parseInt(document.querySelector('#number1').value);
	const number2 = parseInt(document.querySelector('#number2').value);

	if (isNaN(number1) || isNaN(number2)) {
		document.querySelector('#result').textContent = 'Введите корректные числа';
		return;
	}

	let divisors1 = findDivisors(number1);
	let divisors2 = findDivisors(number2);
	let commonDivisors = divisors1.filter(value => divisors2.includes(value));

	document.querySelector('#result').textContent = 'Общие делители чисел ' + number1 + ' и ' + number2 + ': ' + commonDivisors.join(', ');
}

function findDivisors(number) {
	let divisors = [];
	for (let i = 1; i <= number; i++) {
		if (number % i === 0) {
			divisors.push(i);
		}
	}
	return divisors;
}

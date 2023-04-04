const calculateButton = document.querySelector('#calculate');
calculateButton.addEventListener('click', calculateLCM);

function calculateLCM() {
	const number1 = parseInt(document.querySelector('#number1').value);
	const number2 = parseInt(document.querySelector('#number2').value);

	if (isNaN(number1) || isNaN(number2)) {
		document.querySelector('#result').textContent = 'Введите корректные числа';
		return;
	}

	let lcm = findLCM(number1, number2);

	document.querySelector('#result').textContent = 'Наименьшее число, которое делится и на ' + number1 + ', и на ' + number2 + ': ' + lcm;
}

function findLCM(number1, number2) {
	let max = Math.max(number1, number2);
	let min = Math.min(number1, number2);

	for (let i = max; ; i += max) {
		if (i % min === 0) {
			return i;
		}
	}
}

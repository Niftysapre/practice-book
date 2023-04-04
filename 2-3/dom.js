const calculateButton = document.querySelector('#calculate');
calculateButton.addEventListener('click', calculateDivisors);

function calculateDivisors() {
	const number = parseInt(document.querySelector('#number').value);

	if (isNaN(number)) {
		document.querySelector('#result').textContent = 'Введите корректное число';
		return;
	}

	let divisors = [];
	for (let i = 1; i <= number; i++) {
		if (number % i === 0) {
			divisors.push(i);
		}
	}

	document.querySelector('#result').textContent = 'Делители числа ' + number + ': ' + divisors.join(', ');
}

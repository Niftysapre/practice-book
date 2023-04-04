const checkButton = document.querySelector('#check');
checkButton.addEventListener('click', checkTriple);

function checkTriple() {
	const a = parseFloat(document.querySelector('#a').value);
	const b = parseFloat(document.querySelector('#b').value);
	const c = parseFloat(document.querySelector('#c').value);

	if (isNaN(a) || isNaN(b) || isNaN(c)) {
		document.querySelector('#result').textContent = 'Введите корректные числа';
		return;
	}

	const numbers = [a, b, c];
	numbers.sort((x, y) => x - y);

	const smallest = numbers[0];
	const middle = numbers[1];
	const largest = numbers[2];

	if (largest**2 === smallest**2 + middle**2) {
		document.querySelector('#result').textContent = 'Это тройка Пифагора';
	} else {
		document.querySelector('#result').textContent = 'Это не тройка Пифагора';
	}
}

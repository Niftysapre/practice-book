const solveButton = document.querySelector('#solve');
solveButton.addEventListener('click', solveEquation);

function solveEquation() {
	const a = parseFloat(document.querySelector('#a').value);
	const b = parseFloat(document.querySelector('#b').value);
	const c = parseFloat(document.querySelector('#c').value);

	if (isNaN(a) || isNaN(b) || isNaN(c)) {
		document.querySelector('#result').textContent = 'Введите корректные коэффициенты';
		return;
	}

	if (a === 0) {
		document.querySelector('#result').textContent = 'Коэффициент a не может быть равен 0';
		return;
	}

	const d = b**2 - 4*a*c;

	if (d < 0) {
		document.querySelector('#result').textContent = 'Уравнение не имеет действительных корней';
	} else if (d === 0) {
		const x = -b / (2*a);
		document.querySelector('#result').textContent = `Уравнение имеет один корень: x = ${x}`;
	} else {
		const x1 = (-b + Math.sqrt(d)) / (2*a);
		const x2 = (-b - Math.sqrt(d)) / (2*a);
		document.querySelector('#result').textContent = `Уравнение имеет два корня: x1 = ${x1}, x2 = ${x2}`;
	}
}

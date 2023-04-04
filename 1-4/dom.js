function calculate() {

  let side1 = document.getElementById("side1").value;
  let side2 = document.getElementById("side2").value;
  let side3 = document.getElementById("side3").value;

  if (isNaN(side1) || side1 === "" ||
      isNaN(side2) || side2 === "" ||
      isNaN(side3) || side3 === "") {
    alert("Пожалуйста, введите числа!");
    return;
  }

  side1 = Number(side1);
  side2 = Number(side2);
  side3 = Number(side3);

  let s = (side1 + side2 + side3) / 2;
  let area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

  if (isNaN(area) || area === 0) {
    alert("Треугольник с такими сторонами не существует!");
    return;
  }

  document.getElementById("area").innerText = area.toFixed(2);
}

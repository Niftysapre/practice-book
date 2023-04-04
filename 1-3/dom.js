function calculate() {
  let radius = document.getElementById("radius").value;

  if (isNaN(radius) || radius === "") {
    alert("Пожалуйста, введите число!");
    return;
  }

  let area = Math.PI * radius * radius;
  let circumference = 2 * Math.PI * radius;

  document.getElementById("area").innerText = area.toFixed(2);
  document.getElementById("circumference").innerText = circumference.toFixed(2);
}

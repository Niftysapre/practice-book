function calculate() {
  let width = document.getElementById("width").value;
  let height = document.getElementById("height").value;

  if (isNaN(width) || isNaN(height) || width === "" || height === "") {
    alert("Пожалуйста, введите числа!");
    return;
  }

  let area = width * height;
  let perimeter = 2 * (Number(width) + Number(height));

  document.getElementById("area").innerText = area;
  document.getElementById("perimeter").innerText = perimeter;
}

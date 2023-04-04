function calculate() {
    let side = document.getElementById("side").value;
  
    if (isNaN(side) || side === "") {
      alert("Пожалуйста, введите число!");
      return;
    }
  
    let area = side * side;
    let perimeter = side * 4;
  
    document.getElementById("area").innerText = area;
    document.getElementById("perimeter").innerText = perimeter;
  }
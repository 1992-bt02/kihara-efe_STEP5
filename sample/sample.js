document.getElementById("displayBtn").addEventListener("click", function () {
  const input = document.getElementById("inputText").value;
  const outputArea = document.getElementById("outputArea");

  if (input.trim() === "") {
    alert("入力値が空です。");
    return;
  }

  outputArea.textContent = input;
});
const colors = ["lightblue", "lightgreen", "lightcoral"];
let currentColorIndex = 0;

document.getElementById("bgChangeBtn").addEventListener("click", function () {
  document.body.style.backgroundColor = colors[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % colors.length;
});
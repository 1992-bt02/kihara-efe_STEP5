// 表示ボタンの処理
document.getElementById("displayBtn").addEventListener("click", function () {
  const input = document.getElementById("inputText").value;
  const outputArea = document.getElementById("outputArea");

  if (input.trim() === "") {
    alert("入力が必要です。");
    return;
  }

  outputArea.textContent = input;
  outputArea.classList.toggle("highlight"); // ← ここが設問3のポイント！
});

// 背景色切り替え機能
const colors = ["lightblue", "lightgreen", "lightcoral"];
let currentColorIndex = 0;

document.getElementById("bgChangeBtn").addEventListener("click", function () {
  document.body.style.backgroundColor = colors[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % colors.length;
});

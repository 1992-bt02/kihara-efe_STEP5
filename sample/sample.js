document.getElementById("displayBtn").addEventListener("click", function () {
  const input = document.getElementById("inputText").value;
  const outputArea = document.getElementById("outputArea");

  if (input.trim() === "") {
    alert("入力値が空です。");
    return;
  }

  outputArea.textContent = input;
});
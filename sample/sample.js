document.getElementById("displayBtn").addEventListener("click", function () {
  const input = document.getElementById("inputText").value;
  const outputArea = document.getElementById("outputArea");

  if (input.trim() === "") {
    alert("入力が必要です。");
    return;
  }

  let table = outputArea.querySelector("table");
  if (!table) {
    table = document.createElement("table");
    table.border = "1";
    outputArea.appendChild(table);
  }

  // 新しい行を追加
  const newRow = document.createElement("tr");

  const textCell = document.createElement("td");
  textCell.textContent = input;

  const deleteCell = document.createElement("td");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "削除";
  deleteBtn.addEventListener("click", function () {
    newRow.remove();

    // 削除後の行数をカウント
    const currentRows = table.querySelectorAll("tr").length;

    // 3未満なら表示ボタンを再表示
    if (currentRows < 3) {
      document.getElementById("displayBtn").style.display = "inline";
    }
  });

  deleteCell.appendChild(deleteBtn);
  newRow.appendChild(textCell);
  newRow.appendChild(deleteCell);

  table.appendChild(newRow);

  // 行追加後の行数をカウントして、3以上なら表示ボタンを非表示
  const currentRows = table.querySelectorAll("tr").length;
  if (currentRows >= 3) {
    document.getElementById("displayBtn").style.display = "none";
  }
});
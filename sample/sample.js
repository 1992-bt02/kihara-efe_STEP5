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
  // 行クリックで選択状態を切り替える
  newRow.addEventListener("click", function () {
    if (newRow.classList.contains("selected")) {
      newRow.classList.remove("selected");
    } else {
      const allRows = table.querySelectorAll("tr");
      allRows.forEach((row) => row.classList.remove("selected"));
      newRow.classList.add("selected");
    }
  });

  table.appendChild(newRow);

  // 行追加後の行数をカウントして、3以上なら表示ボタンを非表示
  const currentRows = table.querySelectorAll("tr").length;
  if (currentRows >= 3) {
    document.getElementById("displayBtn").style.display = "none";
  }
});

// 背景色の変更ボタン処理
const colors = ["lightblue", "lightgreen", "lightcoral"];
let currentColorIndex = 0;

const bgChangeBtn = document.createElement("button");
bgChangeBtn.id = "bgChangeBtn";
bgChangeBtn.textContent = "背景色を変更";
document.body.insertBefore(bgChangeBtn, document.getElementById("outputArea"));

bgChangeBtn.addEventListener("click", function () {
  document.body.style.backgroundColor = colors[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % colors.length;
});

// コンソールに1から5までのループ回数を表示
for (let i = 1; i <= 5; i++) {
  console.log("ループ回数: " + i);
}
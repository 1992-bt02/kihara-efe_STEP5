// 表示ボタンの処理
document.getElementById("displayBtn").addEventListener("click", function () {
  const input = document.getElementById("inputText").value;
  const outputArea = document.getElementById("outputArea");

  if (input.trim() === "") {
    alert("入力が必要です。");
    return;
  }

  const tableHTML = `
    <table border="1">
      <tr>
        <td>${input}</td>
        <td><button class="deleteBtn">削除</button></td>
      </tr>
    </table>
  `;

  outputArea.innerHTML = tableHTML;
  outputArea.classList.toggle("highlight");

  // 削除ボタンにイベント追加
  document.querySelector(".deleteBtn").addEventListener("click", function () {
    this.closest("tr").remove();
  });
});
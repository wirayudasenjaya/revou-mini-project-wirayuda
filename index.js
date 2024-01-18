const form = document.getElementById("form");
form.addEventListener("submit", function addItem(e) {
  e.preventDefault();
  var nameValue = document.getElementById("nama").value;
  var amountValue = document.getElementById("jumlah").value;
  var table = document.getElementById("table-list");
  rowCount = table.rows.length;
  var row = table.insertRow(-1);
  row.id = "row" + rowCount;
  var nameCell = row.insertCell(0);
  var amountCell = row.insertCell(1);
  var actionCell = row.insertCell(2);
  actionCell.innerHTML =
    '<button id="row' +
    rowCount +
    '" class="delete-button" onclick="removeItem(event)">Hapus Barang</button>';
  var nameText = document.createTextNode(nameValue);
  var amountText = document.createTextNode(amountValue);

  nameCell.append(nameText);
  amountCell.append(amountText);

  form.reset();
});

function removeItem(e) {
  var table = document.getElementById(e.target.id);
  table.remove();
}

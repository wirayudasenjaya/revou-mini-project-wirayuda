function addItem() {
    var nameValue = document.getElementById('nama').value;
    var amountValue = document.getElementById('jumlah').value;
    var table = document.getElementById('table-list');
    var row = table.insertRow(-1);
    var nameCell = row.insertCell(0);
    var amountCell = row.insertCell(1);

    var nameText = document.createTextNode(nameValue);
    var amountText = document.createTextNode(amountValue);

    nameCell.append(nameText);
    amountCell.append(amountText);
}
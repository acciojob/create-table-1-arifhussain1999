function insert_Row() {
    //Write your code here
  const table = document.getElementById('sampleTable');
  
  const newRow =table.insertRow(0);
  const Cell1 =newRow.insertCell(0);
  const Cell2 =newRow.insertCell(1);
  
  Cell1.innerHTML = "New Cell1";
  Cell2.innerHTML = "New Cell2";
}

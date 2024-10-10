//Search Through Table
const Input = document.getElementById("Input-field");

Input.addEventListener("input", () => {
  let InputTobeSearched = Input.value.toUpperCase();

  // console.log(InputTobeSearched)
  let TableRowsSearched = document.getElementsByTagName("tr");
  console.log(TableRowsSearched);

  for (let i = 0; i < TableRowsSearched.length; i++) {
    let TableTDSearched = TableRowsSearched[i].getElementsByTagName("td");
    let AllTextContentofTd = "";
    for (let ind = 0; ind < TableTDSearched.length; ind++) {
      // Loopin
      AllTextContentofTd += TableTDSearched[ind].innerText;
    }
    if (TableTDSearched) {
      // If <Td> is true/exist
      if (AllTextContentofTd.toUpperCase().indexOf(InputTobeSearched) > -1) {
        TableRowsSearched[i].style.display = "";
      } else {
        TableRowsSearched[i].style.display = "none";
      }
    }
  }
});

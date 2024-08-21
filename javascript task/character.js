function multiplicationTable(n) {
  // Create an empty array to store the table rows
  let table = [];

  // Generate the header row
  let header = "     ";
  for (let i = 1; i <= n; i++) {
    header += i.toString().padStart(4) + ". ";
  }
  table.push(header);

  // Generate each row of the multiplication table
  for (let i = 1; i <= n; i++) {
    let row = i.toString().padStart(2) + "  "; // Add row number with padding
    for (let j = 1; j <= n; j++) {
      row += (i * j).toString().padStart(4) + ". ";
    }
    table.push(row);
  }

  // Print the entire table
  for (let i = 0; i < table.length; i++) {
    console.log(table[i]);
  }
}

// Sample usage
multiplicationTable(5);

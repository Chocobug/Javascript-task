function arraySort(arr) {
  // Filter out non-number elements
  const filteredArray = arr.filter((item) => typeof item === "number");

  // Sort the array in ascending order
  filteredArray.sort((a, b) => a - b);

  return filteredArray;
}

// Sample usage
const result = arraySort([5, 10, 1, 2, 3, "Number", { size: 12 }, "6"]);
console.log(result);

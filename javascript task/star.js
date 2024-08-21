function generateStar(maxStars) {
  let result = "";

  for (let i = 1; i <= maxStars; i++) {
    result += "*".repeat(i) + "\n";
  }

  console.log(result);
}

// Sample usage
generateStar(3);

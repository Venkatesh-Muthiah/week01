function printOddNumber(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}

printOddNumber(25);

function positiveOrNegative(num) {
  if (num == 0) {
    console.log(num + " is a neutral");
  } else if (num > 0) {
    console.log(num + " is a positive number");
  } else {
    console.log(num + " is a negative number");
  }
}

positiveOrNegative(0);

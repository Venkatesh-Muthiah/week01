function grades(mark) {
  switch (true) {
    case mark >= 90:
      console.log(mark + " is Grade A");
      break;
    case mark >= 80:
      console.log(mark + " is Grade B");
      break;
    case mark >= 70:
      console.log(mark + " is Grade C");
      break;
    case mark >= 60:
      console.log(mark + " is Grade D");
      break;
    default:
      console.log(mark + " is Grade E");
  }
}

grades(79);

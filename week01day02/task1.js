function launchBrowser(browserName) {
  if (browserName === "safari") {
    console.log("safari");
  } else if (browserName === "edge") {
    console.log("edge");
  } else if (browserName === "chrome") {
    console.log("chrome");
  } else {
    console.log("browser not found");
  }
}
function runTest(testType) {
  switch (testType) {
    case "smoke":
      console.log("smoke testing..");
      break;
    case "sanity":
      console.log("sanity testing..");
      break;
    case "regression":
      console.log("regression testing..");
      break;
    default:
      console.log("No testing is performed");
      break;
  }
}

launchBrowser("safari");
runTest("regression");

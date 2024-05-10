// Global variable
const browserVersion = "chrome";

function getBrowserVersion() {
  if (browserVersion === "chrome") {
    //Local variable
    let browserVersion = "Firefox";
    console.log('Inside "if" block:', browserVersion); // Scope : Local variable
  }
  console.log('Outside "if" block:', browserVersion); // Scope : Global variable
}
console.log("Outside the function:", browserVersion); // Scope : Global variable
getBrowserVersion();

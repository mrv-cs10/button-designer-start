// Button Designer Demo

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Inputs
  let bgHexColor = document.getElementById("color-in").value;
  let btnText = document.getElementById("text-in").value;

  // Convert Hex Color to RGB
  let red = parseInt(bgHexColor.substring(1, 3), 16);
  let green = parseInt(bgHexColor.substring(3, 5), 16);
  let blue = parseInt(bgHexColor.substring(5, 7), 16);

  // Verify Inputs & Conversions in Console
  console.log(`bgHexColor: ${bgHexColor}`);
  console.log(`btnText: ${btnText}`);
  console.log(`red: ${red}`);
  console.log(`green: ${green}`);
  console.log(`blue: ${blue}`);
}

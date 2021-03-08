console.log("Hello to the console!")
function headclick(elt) {
  console.log("Head was clicked at ", new Date())
  elt.innerHTML = "Clicked"
  // Toggle between broccoli (a file: URL) and kittens (http:)
  if(elt.src && elt.src.substring(0,5) == "file:") {
    console.log("Setting to cat")
    elt.src = "http://myhswm.org/images/sized/images/animals/Boris_stray-256x256.jpg"
  }
  else {
    console.log("Setting to cube")
    elt.src = "cube.png"
  }
}

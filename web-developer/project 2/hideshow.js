console.log("hideshow.js loaded")

function hideshow(elt)
{
  if(elt.innerHTML.substring(0,4) == "Hide") {
    // Want to hide answers
    for(var s = elt.nextElementSibling;
        s;
        s = s.nextElementSibling)
        {
          s.style.display = 'none'
          console.log("Sibling", s)
        }
    elt.innerHTML = "Show answer"
  }
  else {
    // Want to show answers
    for(var s = elt.nextElementSibling;
        s;
        s = s.nextElementSibling)
        {
          s.style.display = 'block'
          console.log("Sibling", s)
        }
    elt.innerHTML = "Hide answer"
  }
}

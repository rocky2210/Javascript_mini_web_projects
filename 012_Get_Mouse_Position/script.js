// Function to handle mousemove event

function handleMouseMove(e){
  let xPos = e.clientX;
  let yPos = e.clientY;

  output.innerHTML = `<div><span>X: </span>${xPos}px</div><div><span>Y: </span>${yPos}px</div>`;
}

let output = document.getElementById("output");

// The mousemove event is fired at an element when a pointing device (usually a mouse) is moved while the cursor's hotspot is inside it.
window.addEventListener("mousemove",handleMouseMove);
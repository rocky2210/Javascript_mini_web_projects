const bright = document.getElementById('bright-range');
const sat = document.getElementById('saturation-range');
const bri_c = document.getElementById('bright-toggle');
const sat_c = document.getElementById('saturation-toggle');
const scale = document.getElementById('grey-range');
const gre_c = document.getElementById('grey-toggle');
const cont = document.getElementById('contrast-range');
const cont_ch = document.getElementById('contrast-toggle');
const invert = document.getElementById('invert-toggle');
const bw = document.getElementById('bw-toggle');
const ctx = document.getElementById('canvas').getContext('2d');
const canvas = document.getElementById('canvas');
let is_img = false;

ctx.imageSmoothingEnabled = true; 

const imageLoader = document.getElementById('imageLoader');
imageLoader.addEventListener('change', handleImage);
bright.addEventListener('input', editTools);
bri_c.addEventListener('change', editTools);
sat.addEventListener('input', editTools);
sat_c.addEventListener('change', editTools);
scale.addEventListener('input', editTools);
gre_c.addEventListener('change', editTools);
cont.addEventListener('input', editTools);
cont_ch.addEventListener('change', editTools);
invert.addEventListener('change', editTools);
bw.addEventListener('change', editTools);

let img ,mydata;
function handleImage(e) {
  var reader = new FileReader(); // read the content of the file
  reader.onload = function (event) { 
    img = new Image();
    img.onload = function () {
      canvas.width = img.width; // canvas element match height load image. 
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0); // draws the loaded image on the canvas at the coordiates (0,0)
      newImage = ctx.getImageData(0, 0, 800, 400);
      mydata = newImage.data;
      newImage.data = mydata;
      ctx.putImageData(newImage, 0, 0); // puts the modified image data back to canvas 
    };
    img.src = event.target.result;
    is_img = true; // image loaded successfully
    enableOrdisable();
  };
  if (e.target.id == 'imageLoader') {
    reader.readAsDataURL(e.target.files[0]);
  }
}

//Drag and Drop Functionality
canvas.addEventListener('dragenter', dragEnter, false);
canvas.addEventListener('dragover', dragOver, false);
canvas.addEventListener('drop', drop, false);
canvas.addEventListener('dragleave', dragLeave, false);

function dragEnter(e) {
  e.stopPropagation();
  e.preventDefault();
}

function dragOver(e) {
  e.stopPropagation();
  e.preventDefault();
  e.currentTarget.style.background = "url('public/image-illustration2.svg') no-repeat center #595959";
}

function dragLeave(e) {
  e.stopPropagation();
  e.preventDefault();
  e.currentTarget.style.background = "url('public/image-illustration.svg') no-repeat center";
}

function drop(e) {
  e.stopPropagation();
  e.preventDefault();
  var reader = new FileReader();
  var dt = e.dataTransfer;
  var file = dt.items[0].getAsFile();
  reader.readAsDataURL(file);

  reader.onload = function (e) {
    img = new Image();
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      newImage = ctx.getImageData(0, 0, 800, 400);
      mydata = newImage.data;
      newImage.data = mydata;
      ctx.putImageData(newImage, 0, 0);
    };
    img.src = e.target.result;
    is_img = true;
    enableOrdisable();
  };
}

function editTools() {
    if (!img) {
      console.error('Image is not loaded properly.');
      return;
    }
  ctx.drawImage(img, 0, 0);
  newImage = ctx.getImageData(0, 0, img.width, img.height);
  mydata = newImage.data;
  newImage.data = mydata;
  ctx.putImageData(newImage, 0, 0);

//Brightness
  if (bri_c.checked == true) {
    for (var i = 0; i < mydata.length; i += 4) {
      mydata[i] = mydata[i] * bright.value * 2;
      mydata[i + 1] = mydata[i + 1] * bright.value * 2;
      mydata[i + 2] = mydata[i + 2] * bright.value * 2;
    }
  }

//Greyscale
    if (gre_c.checked == true) {
      for (var i = 0; i < mydata.length; i += 4) {
        var grey = (mydata[i] + mydata[i + 1] + mydata[i + 2]) / scale.value;
        mydata[i] = grey;
        mydata[i + 1] = grey;
        mydata[i + 2] = grey;
      }
    }

//Contrast
  function Truncate(value) {
    if (value < 0.0) {
      value = 0.0;
    } else if (value > 255.0) {
      value = 255.0;
    }
    return value;
}
  if (cont_ch.checked == true) {
      var contrast = parseInt(cont.value, 10);
      for (var i = 0; i < mydata.length; i += 4) {
      var factor = (259.0 * (contrast + 255.0)) / (255.0 * (259.0 - contrast));
      mydata[i] = Truncate(factor * (mydata[i] - 128.0) + 128.0);
      mydata[i + 1] = Truncate(factor * (mydata[i + 1] - 128.0) + 128.0);
      mydata[i + 2] = Truncate(factor * (mydata[i + 2] - 128.0) + 128.0);
      }
  }

//Saturation
if (sat_c.checked == true) {
    let sv = Number(sat.value);
    let luR = 0.3086; // constant to determine luminance of red
    let luG = 0.6094; // constant to determine luminance of green
    let luB = 0.0820; // constant to determine luminance of blue
    let az = (1 - sv)*luR + sv;
    let bz = (1 - sv)*luG;
    let cz = (1 - sv)*luB;
    let dz = (1 - sv)*luR;
    let ez = (1 - sv)*luG + sv;
    let fz = (1 - sv)*luB;
    let gz = (1 - sv)*luR;
    let hz = (1 - sv)*luG;
    let iz = (1 - sv)*luB + sv;

  for (let i = 0; i < mydata.length; i += 4) {
      let red = mydata[i]; // Extract original red color [0 to 255]
      let green = mydata[i + 1]; // Extract original green color [0 to 255]
      let blue = mydata[i + 2]; // Extract original blue color [0 to 255]

      mydata[i] = (az*red + bz*green + cz*blue);
      mydata[i + 1] = (dz*red + ez*green + fz*blue);
      mydata[i + 2] = (gz*red + hz*green + iz*blue);
    }
    newImage.data = mydata;
    ctx.putImageData(newImage, 0, 0);
}

//start invert picture
if (invert.checked == true) {
    for (let i = 0; i < mydata.length; i += 4) {
      mydata[i] = 255 - mydata[i];
      mydata[i + 1] = 255 - mydata[i + 1];
      mydata[i + 2] = 255 - mydata[i + 2];
    }
    newImage.data = mydata;
    ctx.putImageData(newImage, 0, 0);
}

//start B/W picture
if (bw.checked == true) {
    for (let i = 0; i < mydata.length; i += 4) {
      let grey = (mydata[i] + mydata[i + 1] + mydata[i + 2]) / 3;
      if (grey < 128) {
        mydata[i] = mydata[i + 1] = mydata[i + 2] = 0;
      } else {
        mydata[i] = mydata[i + 1] = mydata[i + 2] = 255;
      }
    }
    newImage.data = mydata;
    ctx.putImageData(newImage, 0, 0);
}

newImage.data = mydata;
ctx.putImageData(newImage, 0, 0);
}

// Image upload enable toole
function enableOrdisable() {
  if (is_img) {
    console.log("Image present enabling Toolbox and Download Button");
    document.getElementById("tools-container").classList.remove('disabled');
    document.getElementById("download-button").style.display = 'block';
  } else {
    console.log("No image selected hiding Toolbox and Download Button");
  }
}

// Download function
function download() {
  console.log('download');
  let down = document.createElement('a');
  down.download = 'Image.png';
  down.href = document.getElementById('canvas').toDataURL();
  down.click();
}

const downloadButton = document.getElementById('download-button');
downloadButton.addEventListener('click', download);

// Reset function
function reset() {
  console.log('reset');
  for (element of document.querySelectorAll('input')) {
    if (element.type != 'checkbox') {
      console.log(element.value)
      element.value = element.getAttribute('default')
      console.log(element.value)
    } else {
      element.checked = false
    }
  }
  editTools()
}

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', reset);

reset(); // reset all values

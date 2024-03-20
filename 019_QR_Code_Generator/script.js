// Function for generateQR
function generateQR() {
    let inputText = document.getElementById("input-text").value;

    // Clear previous QR code
    document.getElementById("qrcode").innerHTML = '';

    // Generate QR code
    let qr = qrcode(0, 'M');
    qr.addData(inputText);
    qr.make();
    
    // Display QR code
    var qrCodeImage = qr.createImgTag(6, 0);
    document.getElementById("qrcode").innerHTML = qrCodeImage;
}


// Function for downloadQR
function downloadQR(){
    let qrCodeImage = document.querySelector('#qrcode img');
    let canvas = document.createElement('canvas');
    canvas.width = qrCodeImage.width;
    canvas.height = qrCodeImage.height;
    let ctx = canvas.getContext('2d');
    ctx.drawImage(qrCodeImage, 0, 0);

    let downloadLink = document.createElement('a');
    downloadLink.href = canvas.toDataURL('image/png');
    downloadLink.download = 'qrcode.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}


// Function for share QR
function shareQR(){

    let qrCodeImage = document.querySelector('#qrcode img');
    let canvas = document.createElement('canvas');
    canvas.width = qrCodeImage.width;
    canvas.height = qrCodeImage.height;
    let ctx = canvas.getContext('2d');
    ctx.drawImage(qrCodeImage, 0, 0);
    
    let qrCodeDataURL = canvas.toDataURL('image/png');

    if(navigator.share){
        navigator.share({
            title:'QR Code',
            text: 'Check this QR code!',
            files: [new File([qrCodeDataURL], 'qrcode.png', { type: 'image/png' })],
        })
        .then(() => console.log('Successfully shared'))
        .catch((error) => console.error('Error Shareing:',error));
    }else{
        alert('Share functionality is not supported on this browser 😞.')
    }
}
var QRCode = require('qrcode');

var canvas = document.getElementById('canvas');
var generateQr = document.getElementById('buttonqr'); 
var inputvalue = document.getElementById('inputtext'); 


generateQr.addEventListener('click', () => {
    const text = inputvalue.value; 
    if (text) {
        QRCode.toCanvas(canvas, text, function (error) {
            if (error) console.error(error);
            console.log('QR code generated successfully!');
        });
    } else {
        alert("Please enter some text");
    }
});

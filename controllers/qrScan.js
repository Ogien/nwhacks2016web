// var QrCode = require('qrcode-reader');
// var qr= new QrCode();

// var qrImage = require('qr-image');


// app.get('/', function(req, res) {
//   var code = qr.image(new Date().toString(), { type: 'svg' });
//   res.type('svg');
//   code.pipe(res);
// });

// qr.callback= function(result){alert(result)};


// //Decode an image by context.getImageData: Works with web workers.
// var context = canvas.getContext("2d");
// var data = context.getImageData(0, 0, width, height);
//
// qr.decode(data);
//
// //or Decode from canvas with "qr-canvas" ID:
//
// qr.decode()


/**
 * GET /contact
 * Contact form page.
 */
exports.getQRScan = function(req, res) {
  // var code = qrImage.image(new Date().toString(), { type: 'svg' });
  // console.log(code);
  res.render('qrScan', {
    title: 'qrScan',
  });
};

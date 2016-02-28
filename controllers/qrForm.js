exports.getQRForm = function(req, res) {
  res.render('qrForm', {
    title: 'qrForm',
  });
};

exports.getQRCode = function(req, res) {
  var Candidate = req.body;
  Candidate.linkedin = (req.body.linkedin).length === 19 ? '' : req.body.linkedin;

  res.render('qrCode', {
    title: 'Your QR Code',
    qrCodeUrl: 'https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl='+JSON.stringify(req.body)
  });
};

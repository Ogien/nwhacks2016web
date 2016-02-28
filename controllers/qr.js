exports.getQRScan = function(req, res) {
  res.render('account/qrScan', {
    title: 'qrScan',
  });
};

exports.getQRForm = function(req, res) {
  res.render('qrForm', {
    title: 'qrForm',
    userPicture: req.user.profile.picture
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

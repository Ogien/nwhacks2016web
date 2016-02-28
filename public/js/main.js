$(document).ready(function(){

  $('#reader').html5_qrcode(function(data){
    //Put a http post call for the data here (most likely a url)
    $('#read').html(data);
    $.post( "/candidate/add", data)
      .done(function( data2 ) {
        alert( "Data Loaded: " + data2 );
    });
//     $.ajax({
//   type: "POST",
//   url: "candidate/add",
//   data: data,
//   dataType: json
// });
  },
  function(error){
    $('#read_error').html(error);
  }, function(videoError){
    $('#vid_error').html(videoError);
  }
);
});

function createQRImage(url) {
  console.log(url);
  $('#qrimage').html("<img src='https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl="+url+"'/>");
}

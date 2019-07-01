window.onload=function(){
    var video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      // if (video.requestFullscreen) {
      //   video.requestFullscreen();
      // } else if (elem.mozRequestFullScreen) { /* Firefox */
      //   video.mozRequestFullScreen();
      // } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      //   video.webkitRequestFullscreen();
      // } else if (elem.msRequestFullscreen) { /* IE/Edge */
      //   video.msRequestFullscreen();
      // }

      video.srcObject = stream;
      // document.video.srcObject.requestFullscreen();
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}
}
function takeAphoto(){
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  var video = document.getElementById('videoElement');
  document.getElementById("snapShot").addEventListener("click", function() {
    context.drawImage(video, 0, 0);
  });
  
}
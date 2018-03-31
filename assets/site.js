Notification.requestPermission();
var call = true;

setInterval(function() {
  var now = new Date().getMinutes();

  if ((now % 20 === 0) && call) {
    var no = new Notification("Eye Strain Debugger", {
      body: "Take a hike kiddo.",
    });
    call = false;
  } else if (now % 20 !== 0) {
    call = true;
  }
}, 15000);

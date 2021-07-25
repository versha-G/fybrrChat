function muteUnmute(x) {
  x.classList.toggle("fa-microphone");
  x.classList.toggle("fa-microphone-slash");
}
function video(x) {
  x.classList.toggle("fa-video-camera");
  x.classList.toggle("fa-eye-slash");
}

var outputArea = $("#chat-output");
$("#user-input-form").on("submit", function (e) {
  e.preventDefault();
  var message = $("#usermsg").val();
  outputArea.append(`
    <div class='bot-message'>
      <div class='message'>
        ${message}
      </div>
    </div>
  `);
  setTimeout(function () {
    outputArea.append(`
      <div class='user-message'>
        <div class='message'>
          I'm like 20 lines of JavaScript I can't actually talk to you.
        </div>
      </div>
    `);
  }, 250);
  $("#usermsg").val("");
});

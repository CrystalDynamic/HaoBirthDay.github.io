$(document).ready(function() {
  hoverMusic();
});

function hoverMusic() {
  var header = $("#mainBox");
  var audio = $("audio");
  $("#mainBox").click(function() {
    audio.trigger("play");
  });

  $("#mainBox")
    .click(function() {
      audio.trigger("play");
      //   $(".music-note").css({ display: "inline" });
    })

    .mouseover(function() {
      audio.trigger("play");
      $(".music-note").css({ display: "inline" });
      $(".container").css({ display: "flex" });
      $("body").css("background-image", "url(img/bg.jpg)");
    })
    .mouseout(function() {
      audio.trigger("pause");
      $(".music-note").css({ display: "none" });
      $(".container").css({ display: "none" });
      $("body").css("background-image", "url(img/bg-3.gif)");
    });
}

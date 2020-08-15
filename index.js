AOS.init({});

(async () => {
  // Let's go
  //   fadeIn(title);
  var scene = document.getElementById("scene");
  var parallaxInstance = new Parallax(scene, {
    relativeInput: false,
    hoverOnly: false,
    pointerEvents: true,
  });
  //   if ($(window).width() > 640) { //set up breaking point

  //     $('#scene').parallax(); // this or any other code you need

  // }
})();

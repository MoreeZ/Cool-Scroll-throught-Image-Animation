const controller = new ScrollMagic.Controller();
const images = document.querySelectorAll(".image-div");
images.forEach((image, index) => {
  //   if (image !== images[images.length - 1]) {
  const scroll = new TimelineMax();
  const scroll2 = new TimelineMax();

  scroll.from(image.firstChild, 1000, {
    width: "75%"
    //   transform: "scale(2)"
  });
  scroll.to(image.firstChild, 1000, {
    width: "100%"
    //   transform: "scale(2)"
  });
  scroll.to(image.firstChild, 1000, {
    width: "100%"
    //   transform: "scale(2)"
  });
  scroll.to(image.firstChild, 1000, {
    width: "75%"
    //   transform: "scale(1)"
  });
  // scroll2.to(image.firstChild, 0.35, {
  //   width: "50%"
  // });

  const scene = new ScrollMagic.Scene({
    triggerElement: image,
    triggerHook: 2, // show, when scrolled 10% into view
    duration: "200%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: -300 // move trigger to center of element
  })
    .setTween(scroll)
    .addTo(controller);

  // const scene2 = new ScrollMagic.Scene({
  //   triggerElement: images[index + 1],
  //   triggerHook: 1, // show, when scrolled 10% into view
  //   duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
  //   offset: 100 // move trigger to center of element
  // })
  //   .setTween(scroll2)
  //   .addTo(controller);
  //   }
});

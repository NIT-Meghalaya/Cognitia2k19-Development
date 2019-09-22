if (screen.width > 800) {
  let slide = document.getElementsByClassName('slide-item');
  let images = ["/assests/images/robotics_thumbnail/RAT.jpg",
    "/assests/images/robotics_thumbnail/GAT.jpg",
    "/assests/images/robotics_thumbnail/LFR.jpg",
    "/assests/images/robotics_thumbnail/Rumble.jpg",
    "/assests/images/robotics_thumbnail/Prison.jpg",
    "/assests/images/robotics_thumbnail/PickAndPlace.jpg",
    "/assests/images/robotics_thumbnail/Robodiction.jpg"]
  let counter = 1;

  function slider() {
    for (let i = 0; i < 5; ++i) {
      slide[i].src = images[(i + counter) % 7]
    }
    counter = (counter + 1) % 7;
  }
  setInterval(slider, 4000);
}
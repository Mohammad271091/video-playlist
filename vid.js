

let currentVideo = 1;
var myPlayer;


// Initialize the VideoJs Player
myPlayer = videojs("#playedVideo", {
  preload: 'metadata',
  controls: true,
  fluid: true,
  aspectRatio: "16:9",
  playbackRates: [0.25, 0.5, 1, 1.5, 2],
  plugins: {
    hotkeys: {
      seekStep: 5
    }
  },
});

myPlayer.controlBar.addChild("QualitySelector");


// Handle Vide Click
let listVideo = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.main-video video');
let title = document.querySelector('.main-video .title');
listVideo.forEach(video => {
  video.onclick = () => {
    currentVideo = Number(video.id)
    listVideo.forEach(vid => vid.classList.remove('active'));
    video.classList.add('active');
    if (video.classList.contains('active')) {
      let src0 = video.children[0].children[0].getAttribute("src");
      let src1 = video.children[0].children[1].getAttribute("src");
      let src2 = video.children[0].children[2].getAttribute("src");
      // console.log(video.getBoundingClientRect())
      document.querySelector('.video-list').scrollTo({ top: (video.getBoundingClientRect().top) - 150, behavior: 'smooth' });
      myPlayer.src([
        {
          src: src0,
          type: "video/mp4",
          label: "720P",
          selected: true
        },
        {
          src: src1,
          type: "video/mp4",
          label: "480P",
        },
        {
          src: src2,
          type: "video/mp4",
          label: "144P",
        },
      ]);
      myPlayer.play();
      let text = video.children[1].innerHTML;
      title.innerHTML = text;
    }
  }

});

// disable rt click 
  // window.addEventListener('contextmenu', function (e) {
  //   e.preventDefault();
  // }, false);

  // document.addEventListener("keydown", function (event) {
  //   // var key = event.key || event.keyCode;
  //    if ( event.keyCode == 123 || (event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74) || (event.ctrlKey && event.shiftKey && event.keyCode == 67)) {
  //      event.preventDefault();
  //      alert('Dear Student..\nEnjoy our Lessons!, \n If you\'re facing any problems, please contact us..');
  //      return false;
  //   }
  // }, false);


// Handle Video PlayList
const video = document.querySelector("video");
video.addEventListener("ended", (event) => {
  let listVideo = document.querySelectorAll(".video-list .vid");
  let title = document.querySelector(".main-video .title");
  listVideo.forEach((video) => {
    if (video.id == currentVideo + 1) {
      listVideo.forEach((vid) => vid.classList.remove("active"));
      video.classList.add("active");
      if (video.classList.contains("active")) {

        let src0 = video.children[0].children[0].getAttribute("src");
        let src1 = video.children[0].children[1].getAttribute("src");
        let src2 = video.children[0].children[2].getAttribute("src");

        // Handle Scrolling
        document.querySelector('.video-list').scrollTo({ top: (video.getBoundingClientRect().y) - 120, behavior: 'smooth' });



        myPlayer.src([
          {
            src: src0,
            type: "video/mp4",
            label: "720P",
            selected: true
          },
          {
            src: src1,
            type: "video/mp4",
            label: "480P",
          },
          {
            src: src2,
            type: "video/mp4",
            label: "144P",
          },
        ]);
        myPlayer.ready(function () {
          myPlayer.play();
        });
        let text = video.children[1].innerHTML;
        title.innerHTML = text;
      }
    }
  });
  currentVideo++;
});


// Dark theme for lessons page, and save theme to local storage   
let dark = document.getElementById('dark');
dark.addEventListener('click', (e) => {
  e.preventDefault();
  document.body.classList.toggle('dark');
  if (dark.innerText == "Dark Mode") {
    dark.innerHTML = "Light Mode";
    localStorage.setItem('state', 'dark')
  }
  else {
    dark.innerHTML = "Dark Mode";
    localStorage.setItem('state', 'light')
  }
});

// get the theme state from localStorage
if (localStorage.getItem('state') == 'dark') {
  document.body.classList.toggle('dark');
  if (dark.innerText == "Dark Mode") {
    dark.innerHTML = "Light Mode";
  }
  else {
    dark.innerHTML = "Dark Mode";
  }
}




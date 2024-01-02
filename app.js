// sidebar active

const sidebarItems = document.querySelectorAll('.sidebar-item');

sidebarItems.forEach(item => {
    item.addEventListener('click', function() {
        sidebarItems.forEach(subItem => subItem.classList.remove('active'));

        this.classList.add('active');
    });
});


// favourites
const video = document.querySelector(".vid-container video");
const hoverText = document.querySelector(".vid-container .hover-txt");

video.addEventListener("mouseenter", () => {
  video.play();
});


//play song
const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const thumbnail = document.querySelector('.song-thumbnail');
const progressBarContainer = document.querySelector('.progress-bar-container');
const progressBar = document.querySelector('.progress-bar');

playBtn.addEventListener('click', function() {
    audioPlayer.play();
    thumbnail.classList.add('spinning');
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
});

pauseBtn.addEventListener('click', function() {
    audioPlayer.pause();
    thumbnail.classList.remove('spinning');
    playBtn.style.display = 'block';
    pauseBtn.style.display = 'none';
});

audioPlayer.addEventListener('timeupdate', function() {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = `${progress}%`;
});

audioPlayer.addEventListener('ended', function() {
    thumbnail.classList.remove('spinning');
    playBtn.style.display = 'block';
    pauseBtn.style.display = 'none';
    progressBar.style.width = '0%';
});

progressBarContainer.addEventListener('click', function(e) {
    const clickPosition = (e.pageX  - this.offsetLeft) / this.offsetWidth;
    const clickTime = clickPosition * audioPlayer.duration;
    audioPlayer.currentTime = clickTime;
});

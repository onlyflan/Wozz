const pic1 = document.querySelector('.new-upload .item:nth-child(1) img');
const pic2 = document.querySelector('.new-upload .item:nth-child(2) img');
const pic3 = document.querySelector('.new-upload .item:nth-child(3) img');
const pic4 = document.querySelector('.new-upload .item:nth-child(4) img');
const pic5 = document.querySelector('.new-upload .item:nth-child(5) img');
const audioPlayer = document.getElementById('audio-player');
const thumbnail = document.querySelector('.song-thumbnail');
const songTitle = document.querySelector('.song-title');
const songArtist = document.querySelector('.song-artist');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentSongIndex = 0;

const songs = [
    {
        title: 'Đâu ai dám hứa',
        artist: 'CZEE',
        audio: './Music/ĐÂU AI DÁM HỨA  - CZEE.mp3',
        thumbnail: '/image/new upload/pic1.jfif'
    },
    {
        title: 'Nặng tình hay nhẹ lòng',
        artist: 'Tống Gia Vỹ',
        audio: './Music/bai2.mp3',
        thumbnail: '/image/new upload/pic2.jpg'
    },
    {
        title: 'Chuyện rằng',
        artist: 'Thịnh Suy',
        audio: './Music/bai3.mp3',
        thumbnail: '/image/new upload/pic3.png'
    },
    {
        title: 'Hôm nay tôi buồn',
        artist: 'Phùng Khành Linh',
        audio: './Music/bai4.mp3',
        thumbnail: '/image/new upload/pic4.png'
    },
    {
        title: 'Không phai',
        artist: 'Tăng Duy Tân',
        audio: './Music/bai5.mp3',
        thumbnail: '/image/new upload/pic5.png'
    }
];

function loadSong(index) {
    const song = songs[index];
    audioPlayer.src = song.audio;
    thumbnail.src = song.thumbnail;
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
    audioPlayer.play();
}

pic1.addEventListener('click', function() {
    currentSongIndex = 0;
    loadSong(currentSongIndex);
});

pic2.addEventListener('click', function() {
    currentSongIndex = 1;
    loadSong(currentSongIndex);
});

pic3.addEventListener('click', function() {
    currentSongIndex = 2;
    loadSong(currentSongIndex);
});

pic4.addEventListener('click', function() {
    currentSongIndex = 3;
    loadSong(currentSongIndex);
});

pic5.addEventListener('click', function() {
    currentSongIndex = 4;
    loadSong(currentSongIndex);
});

prevBtn.addEventListener('click', function() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }
    loadSong(currentSongIndex);
});

nextBtn.addEventListener('click', function() {
    currentSongIndex++;
    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
    }
    loadSong(currentSongIndex);
});

//play song
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

audioPlayer.addEventListener('play', function() {
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
});

audioPlayer.addEventListener('pause', function() {
    playBtn.style.display = 'block';
    pauseBtn.style.display = 'none';
});
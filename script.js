// const inputs = document.querySelectorAll('.controls input');

//     function handleUpdate() {
//       const suffix = this.dataset.sizing || '';
//       document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
//     }

//     inputs.forEach(input => input.addEventListener('change', handleUpdate));
//     inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
// Get DOM elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const volume = player.querySelector('input[name="volume"]');
const playbackSpeed = player.querySelector('input[name="playbackRate"]');
const skipButtons = player.querySelectorAll('[data-skip]');

// Play/Pause functionality
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Update Play/Pause button appearance
function updatePlayButton() {
  toggle.textContent = video.paused ? '►' : '❚ ❚';
}

// Update video progress
function updateProgress() {
  const progressPercent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${progressPercent}%`;
}

// Set video progress based on clicked position on progress bar
function setProgress(e) {
  const progressWidth = progress.offsetWidth;
  const clickedPosition = e.offsetX;
  const newTime = (clickedPosition / progressWidth) * video.duration;
  video.currentTime = newTime;
}

// Set volume of the video
function setVolume() {
  video.volume = volume.value;
}

// Set playback speed of the video
function setPlaybackSpeed() {
  video.playbackRate = playbackSpeed.value;
}

// Skip video forward or backward based on data-skip value
function skip() {
  const skipAmount = parseFloat(this.dataset.skip);
  video.currentTime += skipAmount;
}

// Add event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updatePlayButton);
video.addEventListener('pause', updatePlayButton);
video.addEventListener('timeupdate', updateProgress);
toggle.addEventListener('click', togglePlay);
progress.addEventListener('click', setProgress);
volume.addEventListener('input', setVolume);
playbackSpeed.addEventListener('input', setPlaybackSpeed);
skipButtons.forEach((button) => button.addEventListener('click', skip));
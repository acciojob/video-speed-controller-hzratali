const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

const video = document.querySelector('.flex');
const speedBar = document.querySelector('.speed-bar');
const skipButtons = document.querySelectorAll('.skip');
const volumeSlider = document.querySelector('[name="volume"]');
const playbackSpeedSlider = document.querySelector('[name="playbackSpeed"]');
const progressBar = document.querySelector('.progress__filled');
const toggleButton = document.querySelector('.player__button');

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  const icon = video.paused ? '►' : '❚ ❚';
  toggleButton.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleVolumeChange() {
  video.volume = volumeSlider.value;
}

function handlePlaybackSpeedChange() {
  video.playbackRate = playbackSpeedSlider.value;
}

function handleProgress() {
  const progress = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${progress}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

toggleButton.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

skipButtons.forEach(button => button.addEventListener('click', skip));
volumeSlider.addEventListener('input', handleVolumeChange);
playbackSpeedSlider.addEventListener('input', handlePlaybackSpeedChange);

let mousedown = false;
progressBar.parentElement.addEventListener('click', scrub);
progressBar.parentElement.addEventListener('mousemove', (e) => mousedown && scrub(e));
progressBar.parentElement.addEventListener('mousedown', () => mousedown = true);
progressBar.parentElement.addEventListener('mouseup', () => mousedown = false);
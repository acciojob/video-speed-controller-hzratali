document.addEventListener("DOMContentLoaded", function() {
  const video = document.querySelector('.flex');
  const playerButton = document.querySelector('.toggle');
  const volumeRange = document.querySelector('[name="volume"]');
  const playbackSpeedRange = document.querySelector('[name="playbackRate"]');
  const rewindButton = document.querySelector('.skip-back');
  const forwardButton = document.querySelector('.skip-forward');
  const progressBar = document.querySelector('.progress__filled');

  let isPlaying = false;

  function togglePlay() {
    if (isPlaying) {
      video.pause();
      playerButton.textContent = '►';
    } else {
      video.play();
      playerButton.textContent = '❚❚';
    }
    isPlaying = !isPlaying;
  }

  function handleVolumeChange() {
    video.volume = this.value;
  }

  function handlePlaybackSpeedChange() {
    video.playbackRate = this.value;
  }

  function rewind() {
    video.currentTime -= 10;
  }

  function forward() {
    video.currentTime += 25;
  }

  function updateProgressBar() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
  }

  video.addEventListener('click', togglePlay);
  playerButton.addEventListener('click', togglePlay);
  volumeRange.addEventListener('input', handleVolumeChange);
  playbackSpeedRange.addEventListener('input', handlePlaybackSpeedChange);
  rewindButton.addEventListener('click', rewind);
  forwardButton.addEventListener('click', forward);
  video.addEventListener('timeupdate', updateProgressBar);
});

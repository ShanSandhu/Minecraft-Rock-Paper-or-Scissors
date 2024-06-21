document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-audio');
    const volumeControl = document.getElementById('volume');

    volumeControl.addEventListener('input', (event) => {
        audio.volume = event.target.value;
    });
});

const toggle = document.getElementById('theme-toggle');
const body = document.body;

// Check stored theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  toggle.textContent = '🍫';
  updateMugs('coffeemug.png');
} else {
  body.classList.remove('dark-mode');
  toggle.textContent = '🍵';
  updateMugs('matchamug.png');
}

// Toggle handler
toggle.addEventListener('click', () => {
  const isDark = body.classList.toggle('dark-mode');
  toggle.textContent = isDark ? '🍫' : '🍵';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateMugs(isDark ? 'coffeemug.png' : 'matchamug.png');
  updateBackground(isDark);
});

// Mug updater
function updateMugs(src) {
  const mugImgs = document.querySelectorAll('.mug-img');
  mugImgs.forEach(img => img.setAttribute('src', src));
}

function updateBackground(isDark) {
    const video = document.getElementById('bg-video');
    const source = document.getElementById('video-source');
    const newSrc = isDark ? 'cozy.mp4.jpg' : 'matcha.mp4';
  
    if (source.getAttribute('src') !== newSrc) {
      source.setAttribute('src', newSrc);
      video.load(); // reload the new video source

      video.onloadedmetadata = () => {
        if (!isDark) {
          // If matcha mode, jump 5 seconds in (adjust as needed!)
          video.currentTime = 30;
        }
        video.play(); // Start playing from new time
      };
    }
  }
  
  
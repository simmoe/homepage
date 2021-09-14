let content = document.querySelector('#content')
content.src = 'https://simmoe.github.io/Programmering-B/Opgaver/CLOCK2/'
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

document.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      toggleFullScreen();
    }
    if (e.key === "c") {
        content.style.left == '-100vw' ? (content.style.left = '0') : (content.style.left = '-100vw') 
      }
  
}, false);
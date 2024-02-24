let loadedCnt = 0;
let loadStatus = 0;
let loadPercent = 0;
const allImgs = document.querySelectorAll('img').length;
const progressCnt = document.getElementById('progress-count');
const imgLoad = imagesLoaded('img');

let tlProgress = gsap.timeline({
  onUpdate: () => {
    // Update the counter
    loadPercent = Math.floor(tlProgress.progress() * 100);
    progressCnt.innerHTML = loadPercent;
  },
  onComplete: () => {
    // Hide the loading container
    let tlComplete = gsap.timeline()
    .to('#loading-container', {'opacity': 0, duration:0.7})
    .to('#mask', {'opacity': 0, duration:1})
    .to('#loading-container, #mask', {'display': 'none'});
  }
});

tlProgress.to('#progress-bar', {x: 0})

// Update the progress bar and the counter every time an image is loaded
if (allImgs > 0) {
  imgLoad.on( 'progress', function( instance, image ) {
    loadedCnt++;
    loadStatus = loadedCnt/allImgs;
    gsap.to(tlProgress, {progress:loadStatus})
  });
};
// YouTube Fast Forward/Rewind Extension

function addCustomControls() {
  // Check if we're on a video page
  const video = document.querySelector('video');
  if (!video) return;

  // Find the time display element
  const timeDisplay = document.querySelector('.ytp-time-display');
  if (!timeDisplay) return;

  // Check if buttons already exist
  if (document.querySelector('.custom-yt-controls')) return;

  // Create container for custom controls
  const controlsContainer = document.createElement('div');
  controlsContainer.className = 'custom-yt-controls';

  // Create rewind button
  const rewindButton = document.createElement('button');
  rewindButton.className = 'custom-yt-btn rewind-btn';
  rewindButton.innerHTML = `
    <svg height="100%" version="1.1" viewBox="0 0 24 24" width="100%">
      <path d="M11.99 5V1l-5 5 5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6h-2c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" fill="white"/>
      <path d="M10.89 16h-.85v-3.26l-1.01.31v-.69l1.77-.63h.09V16z" fill="white"/>
    </svg>
  `;
  rewindButton.title = 'Rewind 5 seconds';
  rewindButton.addEventListener('click', () => {
    video.currentTime = Math.max(0, video.currentTime - 5);
  });

  // Create fast-forward button
  const fastForwardButton = document.createElement('button');
  fastForwardButton.className = 'custom-yt-btn forward-btn';
  fastForwardButton.innerHTML = `
    <svg height="100%" version="1.1" viewBox="0 0 24 24" width="100%" style="transform: scaleX(-1)">
      <path d="M11.99 5V1l-5 5 5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6h-2c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" fill="white"/>
      <path d="M10.89 16h-.85v-3.26l-1.01.31v-.69l1.77-.63h.09V16z" fill="white"/>
    </svg>
  `;
  fastForwardButton.title = 'Fast-forward 5 seconds';
  fastForwardButton.addEventListener('click', () => {
    video.currentTime = Math.min(video.duration, video.currentTime + 5);
  });

  // Add buttons to container
  controlsContainer.appendChild(rewindButton);
  controlsContainer.appendChild(fastForwardButton);

  // Insert controls beside the time display
  timeDisplay.parentNode.insertBefore(controlsContainer, timeDisplay.nextSibling);

  console.log('Custom YouTube controls added!');
}

// Wait for YouTube to load and add controls
function init() {
  // Initial attempt
  addCustomControls();

  // Watch for navigation changes (YouTube is a SPA)
  const observer = new MutationObserver(() => {
    addCustomControls();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Also listen for YouTube's navigation events
  document.addEventListener('yt-navigate-finish', () => {
    setTimeout(addCustomControls, 500);
  });
}

// Start when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

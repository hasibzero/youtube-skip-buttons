# YouTube Fast Forward/Rewind 5s Extension

A Chrome extension that adds custom 5-second fast-forward and rewind buttons beside the YouTube video timer.

**Note:** This extension is designed for **mouse users**. If you primarily use keyboard shortcuts, YouTube already has built-in shortcuts (Left/Right arrow keys skip backward/forward by 5 seconds) that work without any extension.

## Features

- ✨ Adds two buttons beside the video timer on YouTube
- ⏪ Rewind 5 seconds
- ⏩ Fast-forward 5 seconds
- 🎯 Only appears on YouTube video pages
- 🎨 Matches YouTube's native control style

## Installation

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" (toggle in the top right)
3. Click "Load unpacked"
4. Select the folder containing this extension
5. The extension is now installed!

## Usage

1. Go to any YouTube video
2. Look for the two new buttons beside the video timer (bottom left of the player)
3. Click the left button (◄◄ 5) to rewind 5 seconds
4. Click the right button (►► 5) to fast-forward 5 seconds

**For keyboard users:** YouTube's native shortcuts (Left arrow = rewind 5s, Right arrow = forward 5s) provide the same functionality without requiring this extension.

## Files

- `manifest.json` - Extension configuration
- `content.js` - Main functionality script
- `styles.css` - Button styling
- `icon16.png`, `icon48.png`, `icon128.png` - Extension icons 

## Notes

- The extension works on YouTube's dynamic page navigation
- Buttons automatically appear when you navigate to a video
- Compatible with YouTube's native controls


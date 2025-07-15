# How to Load the Extension into Chrome

Follow these steps to install your Manifest V3 extension in Chrome:

## Step 1: Build the Extension
First, make sure the extension is built:
```bash
npm run start
```

This creates the built extension files in the `dist/` directory.

## Step 2: Open Chrome Extensions Page
1. Open Google Chrome
2. Go to `chrome://extensions/` in the address bar
3. Or click the three dots menu → More tools → Extensions

## Step 3: Enable Developer Mode
1. In the top-right corner of the Extensions page, toggle on **Developer mode**
2. This will show additional buttons for loading unpacked extensions

## Step 4: Load the Extension
1. Click the **"Load unpacked"** button
2. Navigate to your project folder
3. Select the `dist/` folder (NOT the root project folder)
4. Click "Select Folder" or "Open"

## Step 5: Verify Installation
1. The extension should now appear in your extensions list
2. You should see "Show CSS Outline Style" with version 0.1.2
3. Make sure it's enabled (toggle switch is on)

## Step 6: Test the Extension
1. Navigate to any website (e.g., https://google.com)
2. Click the extension icon in the Chrome toolbar
   - If you don't see it, click the puzzle piece icon and pin it
3. All elements on the page should get red outlines
4. Click again to toggle the outlines off

## Troubleshooting

### Extension Not Loading
- Make sure you selected the `dist/` folder, not the root project folder
- Ensure the build completed successfully with `npm run start`
- Check that `dist/manifest.json` exists and has `manifest_version: 3`

### Extension Icon Not Visible
- Click the puzzle piece icon (Extensions) in the Chrome toolbar
- Find "Show CSS Outline Style" and click the pin icon to keep it visible

### Extension Not Working on Some Pages
- The extension only works on HTTP/HTTPS pages
- It won't work on Chrome internal pages (chrome://, chrome-extension://)
- Check the browser console for any error messages

## Updating the Extension
When you make changes to the code:
1. Run `npm run start` to rebuild
2. Go to `chrome://extensions/`
3. Click the refresh icon on your extension card
4. Or remove and re-add the extension using "Load unpacked"

## Distribution
For distribution to others, you can:
1. Run `npm run package` to create a ZIP file
2. Upload to Chrome Web Store for public distribution
3. Or share the ZIP file for manual installation

# Manifest V3 Migration Summary

This document outlines the changes made to convert the Chrome extension from Manifest V2 to Manifest V3.

## Changes Made

### 1. Manifest File (`manifest.json`)
- Updated `manifest_version` from `2` to `3`
- Changed `browser_action` to `action`
- Updated `background.scripts` to `background.service_worker`
- Added `scripting` permission (required for `chrome.scripting.executeScript`)

### 2. Background Script (`src/background.ts`)
- Replaced `chrome.browserAction.onClicked` with `chrome.action.onClicked`
- Replaced `chrome.tabs.executeScript` with `chrome.scripting.executeScript`
- Updated API call structure:
  - Old: `chrome.tabs.executeScript({ code: "..." })`
  - New: `chrome.scripting.executeScript({ target: { tabId }, func: functionName, args: [...] })`
- Moved injected code to a separate function (`toggleOutlineStyle`) for better security
- Added proper error handling and null checks

### 3. TypeScript Configuration (`tsconfig.json`)
- Updated `target` from `es5` to `es2017` (required for async/await support)
- Added additional compiler options for better type checking

### 4. Dependencies (`package.json`)
- Updated `@types/chrome` from `0.0.113` to `0.0.246` for Manifest V3 type support
- Updated build scripts to include Node.js legacy OpenSSL provider flag

## Key Differences Between V2 and V3

### Background Scripts
- **V2**: Background scripts run as persistent background pages
- **V3**: Service workers that are event-driven and non-persistent

### Content Script Injection
- **V2**: `chrome.tabs.executeScript()` with inline code strings
- **V3**: `chrome.scripting.executeScript()` with function references (more secure)

### Permissions
- **V3**: Requires explicit `scripting` permission for script injection

### Browser Action
- **V2**: `browser_action` in manifest, `chrome.browserAction` API
- **V3**: `action` in manifest, `chrome.action` API

## Building the Extension

To build the extension, run:
```bash
npm run start
```

The built extension will be available in the `dist/` directory and can be loaded as an unpacked extension in Chrome's developer mode.

## Testing

The extension maintains the same functionality:
1. Click the extension icon in the toolbar
2. CSS outlines will be toggled on/off for all elements on the current page
3. Only works on valid HTTP/HTTPS URLs (not on chrome:// pages)

# Unreadit - Reddit to Old Reddit Redirector

## Overview

Unreadit is a Safari Web Extension that automatically redirects users from the new Reddit interface (reddit.com) to the old Reddit interface (old.reddit.com). This extension works on both macOS and iOS devices running Safari.

## Features

- Automatically redirects reddit.com URLs to old.reddit.com
- Toggle to enable/disable redirection from the extension popup
- Works on both desktop (macOS) and mobile (iOS) Safari
- Lightweight and fast, with minimal performance impact

## Requirements

- macOS 11 Big Sur or later (for macOS users)
- iOS 15 or later (for iOS users)
- Safari 14 or later

## Installation

### For Developers

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/reddit-old-reddit-redirector.git
   ```
2. Open the Xcode project file
3. Build and run the project on your desired simulator or device

## Usage

1. Once installed and enabled, the extension will automatically redirect reddit.com URLs to old.reddit.com
2. Click on the extension icon in Safari to open the popup
3. Use the toggle switch in the popup to enable or disable the redirection

## Development

This project is developed using Xcode and Swift, with the extension logic implemented in JavaScript.

### Project Structure

- `Shared (App)`: Contains the main app code
- `Shared (Extension)`: Contains the extension code
  - `Resources`: Contains HTML, CSS, and JavaScript files for the extension
    - `manifest.json`: Extension manifest file
    - `content.js`: Content script for redirection logic
    - `popup.html`: HTML for the extension popup
    - `popup.js`: JavaScript for the extension popup
    - `background.js`: Background script for the extension
- `iOS (App)`: iOS-specific app code
- `iOS (Extension)`: iOS-specific extension code
- `macOS (App)`: macOS-specific app code
- `macOS (Extension)`: macOS-specific extension code

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the GPLv3 License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Thanks to all the users who prefer the old Reddit interface
- Inspired by similar extensions for other browsers

## Support

If you encounter any issues or have any questions, please file an issue on the GitHub repository.

---

Happy browsing with the old Reddit interface!

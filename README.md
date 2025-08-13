
# Inspection History App

An Expo React Native app for tracking and viewing inspection history of equipment, with a modern UI, animated lists, and month/year filtering.

## Features

- View inspection history for equipment by month and year
- Animated list items (fade/slide in on scroll and refresh)
- Pull-to-refresh with smooth re-animation
- Month/year picker modal for quick navigation
- Responsive, modern UI

## Folder Structure

```
inspection-history/
├── app/                  # Entry points and routing
├── assets/               # Images and fonts
├── src/
│   ├── components/       # Reusable UI components (BottomNav, Header, InspectionCard, MonthPickerModal)
│   ├── data/             # Mock data for inspections
│   ├── screens/          # Main screen (InspectionHistoryScreen)
│   └── utils/            # Utility functions (dateUtils.js)
├── package.json
├── app.json
└── ...
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (install globally with `npm install -g expo-cli`)

### Installation

1. Clone the repository or download the project files.
2. Navigate to the project directory:
   ```bash
   cd inspection-history
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the Expo development server:

```bash
npx expo start
```

You can then:
- Scan the QR code with Expo Go on your mobile device
- Press `a` to open in Android emulator
- Press `i` to open in iOS simulator
- Press `w` to open in your web browser

## Usage

- Use the month/year picker at the top to filter inspections
- Pull down on the list to refresh and see animated reloading
- Tap the floating scan button (FAB) for scan actions (customize as needed)
- Use the bottom navigation for Home/Profile (customize navigation logic as needed)

## Customization

- To change the mock data, edit `src/data/mockData.js`
- To adjust UI or animations, edit components in `src/components/` and `src/screens/`

## License

This project is for educational/demo purposes. You may use and modify it as needed.

# Google Fonts Widget

## Features

- project set up using `Create React App` and using `React Hooks API` (_useState_, _useEffect_, _useContext_)
- fonts fetched from _API Google Fonts_ with `API key` and automatically loaded with `react-google-font-loader`
- modular components styled with `Bootstrap 5`

## Project Structure

```bash
src
├── App.js
├── components
│   ├── Header.js
│   ├── Footer.js
│   ├── fonts
│   │   ├── Font.js
│   │   ├── PopularFonts.js
│   │   ├── RecentFonts.js
│   │   └── TrendingFonts.js
│   └── selection
│       ├── FontSize.js
│       └── Text.js
├── context
│   └── Context.js
├── index.js
├── serviceWorker.js
└── setupTests.js
```

## Install

### Install dependencies:

```zsh
% yarn install
```

### Add environment variables:

Add _.env.local_ file with environment variable `REACT_APP_OPENWEATHER_API_KEY` with the value of `API key` for _OpenWeather API_

## Run the app in the development mode

```zsh
% yarn start
```

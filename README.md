# Outfit Weather Matcher

A single-page React widget that suggests what to wear based on the temperature you enter.

## Features

- Live outfit suggestions as you type a temperature
- Toggle between °C and °F (physical temperature preserved on switch)
- 7 distinct temperature bands with color-coded backgrounds
- 3 style variants per band (office casual, weekend relaxed, street chic, and more)
- **Randomize Look** button to shuffle variants within the same band
- Responsive layout, no backend required

## Temperature bands

| Band | Range (°C) | Vibe |
|------|------------|------|
| Arctic | below 0 | icy blue |
| Cold | 0–9 | cool blue |
| Cool | 10–15 | soft teal |
| Mild | 16–20 | soft green |
| Warm | 21–24 | soft amber |
| Hot | 25–29 | warm orange |
| Scorching | 30+ | vivid coral |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
npm run preview
```

## Stack

- Vite
- React 19
- Vanilla CSS with OKLCH color tokens

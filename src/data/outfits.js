export const OUTFIT_BANDS = [
  {
    id: "arctic",
    name: "Arctic",
    min: -100,
    max: 0,
    theme: {
      bgFrom: "oklch(0.88 0.06 230)",
      bgTo: "oklch(0.72 0.1 245)",
      surface: "oklch(0.94 0.03 230 / 0.72)",
      accent: "oklch(0.45 0.12 245)",
      text: "oklch(0.22 0.04 245)",
      muted: "oklch(0.38 0.06 245)",
    },
    variants: [
      {
        emoji: "🧥",
        label: "City Commuter",
        description: "Heavy wool coat, thermal layers, scarf, and insulated boots.",
      },
      {
        emoji: "🧣",
        label: "Weekend Cozy",
        description: "Puffer jacket, fleece hoodie, knit beanie, and snow boots.",
      },
      {
        emoji: "⛷️",
        label: "Alpine Ready",
        description: "Down parka, ski gloves, balaclava, and waterproof boots.",
      },
    ],
    funEmojis: ["🧥", "🧣", "❄️", "🥾", "🧤", "⛄"],
    weatherEmoji: "❄️",
  },
  {
    id: "cold",
    name: "Cold",
    min: 0,
    max: 10,
    theme: {
      bgFrom: "oklch(0.9 0.05 220)",
      bgTo: "oklch(0.78 0.08 235)",
      surface: "oklch(0.95 0.025 220 / 0.72)",
      accent: "oklch(0.48 0.1 235)",
      text: "oklch(0.24 0.04 235)",
      muted: "oklch(0.4 0.06 235)",
    },
    variants: [
      {
        emoji: "🧥",
        label: "Office Casual",
        description: "Wool overcoat, merino sweater, tailored trousers, and leather boots.",
      },
      {
        emoji: "🧶",
        label: "Weekend Relaxed",
        description: "Quilted jacket, chunky knit, dark jeans, and Chelsea boots.",
      },
      {
        emoji: "🎒",
        label: "Street Chic",
        description: "Bomber jacket, turtleneck, cargo pants, and high-top sneakers.",
      },
    ],
    funEmojis: ["🧥", "🧶", "🧣", "🥾", "🌬️", "☁️"],
    weatherEmoji: "🌨️",
  },
  {
    id: "cool",
    name: "Cool",
    min: 10,
    max: 16,
    theme: {
      bgFrom: "oklch(0.91 0.04 195)",
      bgTo: "oklch(0.82 0.07 185)",
      surface: "oklch(0.96 0.02 195 / 0.72)",
      accent: "oklch(0.5 0.09 185)",
      text: "oklch(0.25 0.04 185)",
      muted: "oklch(0.42 0.06 185)",
    },
    variants: [
      {
        emoji: "🧥",
        label: "Light Layers",
        description: "Denim jacket over a long-sleeve tee, straight jeans, and loafers.",
      },
      {
        emoji: "🧢",
        label: "Weekend Walk",
        description: "Windbreaker, henley shirt, chinos, and canvas sneakers.",
      },
      {
        emoji: "👔",
        label: "Smart Casual",
        description: "Blazer, oxford shirt, slim trousers, and suede desert boots.",
      },
    ],
    funEmojis: ["🧥", "🧢", "👔", "🍂", "🌤️", "👖"],
    weatherEmoji: "🍂",
  },
  {
    id: "mild",
    name: "Mild",
    min: 16,
    max: 21,
    theme: {
      bgFrom: "oklch(0.92 0.04 155)",
      bgTo: "oklch(0.84 0.08 145)",
      surface: "oklch(0.97 0.02 155 / 0.72)",
      accent: "oklch(0.52 0.1 145)",
      text: "oklch(0.26 0.04 145)",
      muted: "oklch(0.44 0.06 145)",
    },
    variants: [
      {
        emoji: "👕",
        label: "Everyday Easy",
        description: "Long-sleeve cotton tee, chinos, and clean white sneakers.",
      },
      {
        emoji: "🧥",
        label: "Layered Look",
        description: "Light cardigan, striped shirt, tapered pants, and boat shoes.",
      },
      {
        emoji: "🎨",
        label: "Creative Casual",
        description: "Oversized shirt, relaxed trousers, and colorful trainers.",
      },
    ],
    funEmojis: ["👕", "🧥", "🌿", "🌤️", "👟", "☁️"],
    weatherEmoji: "🌤️",
  },
  {
    id: "warm",
    name: "Warm",
    min: 21,
    max: 25,
    theme: {
      bgFrom: "oklch(0.93 0.05 85)",
      bgTo: "oklch(0.85 0.1 75)",
      surface: "oklch(0.97 0.025 85 / 0.72)",
      accent: "oklch(0.55 0.12 70)",
      text: "oklch(0.28 0.05 70)",
      muted: "oklch(0.46 0.07 70)",
    },
    variants: [
      {
        emoji: "👚",
        label: "Breezy Day",
        description: "Breathable tee, linen-blend pants, and slip-on sandals.",
      },
      {
        emoji: "🩳",
        label: "Park Hangout",
        description: "Graphic tee, cotton shorts, baseball cap, and running shoes.",
      },
      {
        emoji: "🌿",
        label: "Garden Stroll",
        description: "Polo shirt, cropped trousers, and woven espadrilles.",
      },
    ],
    funEmojis: ["👚", "🩳", "🌿", "☀️", "🧢", "👡"],
    weatherEmoji: "☀️",
  },
  {
    id: "hot",
    name: "Hot",
    min: 25,
    max: 30,
    theme: {
      bgFrom: "oklch(0.9 0.08 55)",
      bgTo: "oklch(0.8 0.14 45)",
      surface: "oklch(0.96 0.03 55 / 0.72)",
      accent: "oklch(0.58 0.16 42)",
      text: "oklch(0.3 0.06 42)",
      muted: "oklch(0.48 0.08 42)",
    },
    variants: [
      {
        emoji: "🕶️",
        label: "Sun Ready",
        description: "Loose tee, athletic shorts, sunglasses, and open-toe slides.",
      },
      {
        emoji: "🏖️",
        label: "Beach Vibes",
        description: "Tank top, board shorts, sun hat, and flip-flops.",
      },
      {
        emoji: "🎾",
        label: "Active Out",
        description: "Moisture-wick shirt, running shorts, visor, and trainers.",
      },
    ],
    funEmojis: ["🕶️", "🏖️", "🎾", "☀️", "🩳", "🧴"],
    weatherEmoji: "🔆",
  },
  {
    id: "scorching",
    name: "Scorching",
    min: 30,
    max: 100,
    theme: {
      bgFrom: "oklch(0.88 0.1 35)",
      bgTo: "oklch(0.75 0.16 28)",
      surface: "oklch(0.95 0.04 35 / 0.72)",
      accent: "oklch(0.6 0.18 28)",
      text: "oklch(0.32 0.07 28)",
      muted: "oklch(0.5 0.09 28)",
    },
    variants: [
      {
        emoji: "🧢",
        label: "Heat Shield",
        description: "Linen shirt, airy shorts, wide-brim hat, and UV-blocking shades.",
      },
      {
        emoji: "🩱",
        label: "Poolside Cool",
        description: "Lightweight tank, swim trunks, bucket hat, and slides.",
      },
      {
        emoji: "🌴",
        label: "Tropical Escape",
        description: "Hawaiian shirt, linen shorts, straw hat, and barefoot sandals.",
      },
    ],
    funEmojis: ["🧢", "🩱", "🌴", "🔥", "☀️", "🥵"],
    weatherEmoji: "🥵",
  },
];

export function getTemperatureEmojis(band, variantIndex = 0) {
  const variantEmojis = band.variants.map((item) => item.emoji);
  const currentEmoji = band.variants[variantIndex]?.emoji ?? variantEmojis[0];
  const ordered = [currentEmoji, band.weatherEmoji, ...variantEmojis, ...band.funEmojis];
  const seen = new Set();

  return ordered.filter((emoji) => {
    if (seen.has(emoji)) {
      return false;
    }
    seen.add(emoji);
    return true;
  });
}

export function toCelsius(value, unit) {
  if (unit === "F") {
    return (value - 32) * 5 / 9;
  }
  return value;
}

export function fromCelsius(celsius, unit) {
  if (unit === "F") {
    return celsius * 9 / 5 + 32;
  }
  return celsius;
}

export function findBand(celsius) {
  return OUTFIT_BANDS.find((band) => celsius >= band.min && celsius < band.max)
    ?? OUTFIT_BANDS[OUTFIT_BANDS.length - 1];
}

export function pickRandomVariantIndex(currentIndex, variantCount) {
  if (variantCount <= 1) {
    return 0;
  }

  let nextIndex = currentIndex;
  while (nextIndex === currentIndex) {
    nextIndex = Math.floor(Math.random() * variantCount);
  }
  return nextIndex;
}

export function formatTemperature(value, unit) {
  const rounded = Math.round(value * 10) / 10;
  return `${rounded}°${unit}`;
}

import { useEffect, useMemo, useState } from "react";
import OutfitCard from "./components/OutfitCard.jsx";
import TempControls from "./components/TempControls.jsx";
import {
  findBand,
  formatTemperature,
  fromCelsius,
  pickRandomVariantIndex,
  toCelsius,
} from "./data/outfits.js";

function applyTheme(theme) {
  const root = document.documentElement;
  root.style.setProperty("--bg-from", theme.bgFrom);
  root.style.setProperty("--bg-to", theme.bgTo);
  root.style.setProperty("--surface", theme.surface);
  root.style.setProperty("--accent", theme.accent);
  root.style.setProperty("--text", theme.text);
  root.style.setProperty("--muted", theme.muted);
}

const DEFAULT_THEME = {
  bgFrom: "oklch(0.94 0.02 80)",
  bgTo: "oklch(0.88 0.03 70)",
  surface: "oklch(0.97 0.015 80 / 0.72)",
  accent: "oklch(0.5 0.08 70)",
  text: "oklch(0.28 0.03 70)",
  muted: "oklch(0.45 0.04 70)",
};

export default function App() {
  const [temp, setTemp] = useState("");
  const [unit, setUnit] = useState("C");
  const [variantIndex, setVariantIndex] = useState(0);

  const parsedTemp = temp === "" || temp === "-" ? null : Number(temp);
  const isValidTemp = parsedTemp !== null && Number.isFinite(parsedTemp);

  const celsius = isValidTemp ? toCelsius(parsedTemp, unit) : null;
  const band = celsius !== null ? findBand(celsius) : null;

  const safeVariantIndex = band
    ? Math.min(variantIndex, band.variants.length - 1)
    : 0;

  const variant = band ? band.variants[safeVariantIndex] : null;

  const displayTemp = isValidTemp
    ? formatTemperature(parsedTemp, unit)
    : "";

  const variantKey = band
    ? `${band.id}-${safeVariantIndex}`
    : "empty";

  useEffect(() => {
    applyTheme(band?.theme ?? DEFAULT_THEME);
  }, [band]);

  useEffect(() => {
    setVariantIndex(0);
  }, [band?.id]);

  function handleTempChange(value) {
    setTemp(value);
  }

  function handleUnitToggle(nextUnit) {
    if (nextUnit === unit) {
      return;
    }

    if (isValidTemp) {
      const converted = fromCelsius(toCelsius(parsedTemp, unit), nextUnit);
      const rounded = Math.round(converted * 10) / 10;
      setTemp(String(rounded));
    }

    setUnit(nextUnit);
  }

  function handleRandomize() {
    if (!band) {
      return;
    }

    setVariantIndex((current) => pickRandomVariantIndex(current, band.variants.length));
  }

  const subtitle = useMemo(() => {
    if (!band) {
      return "Dress for the weather, not the guesswork.";
    }
    return `Feels like ${band.name.toLowerCase()} weather right now.`;
  }, [band]);

  return (
    <div className="app">
      <div className="grain" aria-hidden="true" />

      <main className="shell">
        <header className="hero">
          <p className="eyebrow">Daily wardrobe helper</p>
          <h1 className="title">Outfit Weather Matcher</h1>
          <p className="subtitle">{subtitle}</p>
        </header>

        <TempControls
          temp={temp}
          unit={unit}
          onTempChange={handleTempChange}
          onUnitToggle={handleUnitToggle}
        />

        <OutfitCard
          band={band}
          variant={variant}
          displayTemp={displayTemp}
          variantKey={variantKey}
          onRandomize={handleRandomize}
          isEmpty={!isValidTemp}
        />
      </main>
    </div>
  );
}

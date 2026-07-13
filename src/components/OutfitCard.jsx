import { useEffect, useMemo, useState } from "react";
import { getTemperatureEmojis } from "../data/outfits.js";

const CYCLE_MS = 3000;

function FunEmoji({ emojis }) {
  const [index, setIndex] = useState(0);
  const emojiKey = emojis.join("|");

  useEffect(() => {
    setIndex(0);
  }, [emojiKey]);

  useEffect(() => {
    if (emojis.length <= 1) {
      return undefined;
    }

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % emojis.length);
    }, CYCLE_MS);

    return () => clearInterval(timer);
  }, [emojiKey, emojis.length]);

  return (
    <div className="outfit-emoji-wrap">
      <div className="outfit-emoji" key={`${emojiKey}-${index}`} aria-hidden="true">
        {emojis[index]}
      </div>
    </div>
  );
}

export default function OutfitCard({
  band,
  variant,
  variantIndex,
  displayTemp,
  variantKey,
  onRandomize,
  isEmpty,
}) {
  const temperatureEmojis = useMemo(() => {
    if (!band) {
      return ["🌡️"];
    }
    return getTemperatureEmojis(band, variantIndex);
  }, [band, variantIndex]);

  if (isEmpty) {
    return (
      <section className="outfit-card outfit-card--empty" aria-live="polite">
        <div className="outfit-emoji-wrap">
          <div className="outfit-emoji outfit-emoji--static" aria-hidden="true">
            🌡️
          </div>
        </div>
        <h2 className="outfit-empty-title">Waiting for a temperature</h2>
        <p className="outfit-empty-copy">
          Enter how warm or cold it is outside, and we will suggest what to wear.
        </p>
      </section>
    );
  }

  return (
    <section
      className="outfit-card"
      aria-live="polite"
      key={variantKey}
    >
      <div className="outfit-meta">
        <span className="outfit-band">{band.name}</span>
        <span className="outfit-temp">{displayTemp}</span>
      </div>

      <FunEmoji emojis={temperatureEmojis} />

      <h2 className="outfit-label">{variant.label}</h2>
      <p className="outfit-description">{variant.description}</p>

      <button
        type="button"
        className="randomize-btn"
        onClick={onRandomize}
      >
        Randomize Look
      </button>
    </section>
  );
}

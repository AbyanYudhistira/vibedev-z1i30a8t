import { useEffect, useMemo, useState } from "react";
import { getBandRangeLabel, getUniqueEmojis } from "../data/outfits.js";

const EMOJI_CYCLE_MS = 3000;

function EmojiPreview({ emojis, resetKey }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [resetKey]);

  useEffect(() => {
    if (emojis.length <= 1) {
      return undefined;
    }

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % emojis.length);
    }, EMOJI_CYCLE_MS);

    return () => clearInterval(timer);
  }, [emojis, resetKey]);

  return (
    <div className="outfit-emoji-preview" key={`${resetKey}-${index}`} aria-hidden="true">
      {emojis[index]}
    </div>
  );
}

export default function OutfitCard({
  band,
  variant,
  displayTemp,
  variantKey,
  onRandomize,
  isEmpty,
}) {
  const rangeLabel = band ? getBandRangeLabel(band) : "";

  const previewEmojis = useMemo(() => {
    if (!band || !variant) {
      return [];
    }

    const uniqueEmojis = getUniqueEmojis(band.variants);
    const otherEmojis = uniqueEmojis.filter((emoji) => emoji !== variant.emoji);
    return otherEmojis.length > 0 ? otherEmojis : uniqueEmojis;
  }, [band, variant]);

  const showPreview = previewEmojis.length > 1;

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
    <section className="outfit-card" aria-live="polite">
      <div className="outfit-meta">
        <span className="outfit-band">{band.name}</span>
        <span className="outfit-range">{rangeLabel}</span>
        <span className="outfit-temp">{displayTemp}</span>
      </div>

      <div className="outfit-emoji-block">
        <div className="outfit-emoji-wrap outfit-emoji-wrap--main">
          <div className="outfit-emoji outfit-emoji--static" aria-hidden="true">
            {variant.emoji}
          </div>
        </div>

        {showPreview && (
          <div className="outfit-emoji-preview-row">
            <p className="outfit-emoji-caption">More looks for this weather</p>
            <EmojiPreview emojis={previewEmojis} resetKey={variantKey} />
          </div>
        )}
      </div>

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

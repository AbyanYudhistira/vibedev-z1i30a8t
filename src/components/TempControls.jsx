function handleTempWheel(event) {
  event.currentTarget.blur();
}

export default function TempControls({
  temp,
  unit,
  onTempChange,
  onUnitToggle,
}) {
  return (
    <div className="temp-controls">
      <label className="temp-label" htmlFor="temperature">
        Outside temperature
      </label>

      <div className="temp-input-row">
        <input
          id="temperature"
          className="temp-input"
          type="number"
          inputMode="decimal"
          placeholder="e.g. 18"
          value={temp}
          onChange={(event) => onTempChange(event.target.value)}
          onWheel={handleTempWheel}
          aria-describedby="temp-hint"
        />

        <div className="unit-toggle" role="group" aria-label="Temperature unit">
          <button
            type="button"
            className={`unit-btn ${unit === "C" ? "is-active" : ""}`}
            onClick={() => onUnitToggle("C")}
            aria-pressed={unit === "C"}
          >
            °C
          </button>
          <button
            type="button"
            className={`unit-btn ${unit === "F" ? "is-active" : ""}`}
            onClick={() => onUnitToggle("F")}
            aria-pressed={unit === "F"}
          >
            °F
          </button>
        </div>
      </div>

      <p id="temp-hint" className="temp-hint">
        Type a number and watch your look update instantly.
      </p>
    </div>
  );
}

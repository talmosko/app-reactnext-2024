const inputs = {
  slow: "Quick(?)",
  "surprise 1": "Surprise 1",
  "surprise 2": "Surprise 2",
};

function RenderingSelection({ comp, handleChange }) {
  return (
    <div className="flex gap-4">
      {Object.entries(inputs).map(([value, label]) => (
        <label key={value} className="flex items-center gap-2 text-sm">
          <input
            name="comp"
            checked={comp === value}
            value={value}
            type="radio"
            onChange={handleChange}
            className="text-blue-500"
          />
          <span>{label}</span>
        </label>
      ))}
    </div>
  );
}

export default RenderingSelection;

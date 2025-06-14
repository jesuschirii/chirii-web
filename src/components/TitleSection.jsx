export function Title({ title, backgroundColor, color, className }) {
  backgroundColor = backgroundColor || "transparent";
  color = color || "black";

  return (
    <div className={`${className || ""}`}>
      <div className={"aboutme-title-container "} style={{ backgroundColor }}>
        <h2 style={{ color }}>{title}</h2>
      </div>
    </div>
  );
}

import "./card-assuntos.css";

export default function CardAssuntos({
  icon,
  title,
  description,
  color,
  buttonColor,
  iconColor,
  assunto,
  onOpen
}) {
  return (
    <div
      className="topic-card"
      style={{
        backgroundColor: color
      }}
    >
      <div
        className="topic-icon"
        style={{
          color: iconColor
        }}
      >
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <button
        className="topic-btn"
        style={{
          backgroundColor: buttonColor
        }}
        onClick={() => onOpen(assunto)}
      >
        Saiba mais →
      </button>
    </div>
  );
}
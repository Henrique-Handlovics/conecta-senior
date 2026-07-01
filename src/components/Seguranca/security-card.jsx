import "./seguranca.css";

export default function SecurityCard({
  icon,
  title,
  description,
  color,
  iconColor
}) {
  return (
    <div
      className="security-card"
      style={{ background: color }}
    >
      <div
        className="security-icon"
        style={{ color: iconColor }}
      >
        {icon}
      </div>

      <h4>{title}</h4>

      <p>{description}</p>
    </div>
  );
}
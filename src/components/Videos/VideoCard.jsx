import "./videos.css";

export default function VideoCard({
  video,
  onOpen
}) {
  return (
    <div
      className="video-card"
      style={{
        backgroundColor: video.color
      }}
    >
      <div
        className="video-icon"
        style={{
          color: video.iconColor
        }}
      >
        {video.icon}
      </div>

      <span className="video-level">
        {video.level}
      </span>

      <h3>{video.title}</h3>

      <p>{video.description}</p>

      <div className="video-info">

        <span>
          ⏱ {video.duration}
        </span>

      </div>

      <button
        className="video-btn"
        onClick={() => onOpen(video)}
      >
        Ver detalhes →
      </button>
    </div>
  );
}
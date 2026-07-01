import "./videos.css";

export default function VideoModal({
  video,
  onClose
}) {

  if (!video) return null;

  return (

    <div
      className="video-overlay"
      onClick={onClose}
    >

      <div
        className="video-modal"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          className="video-close"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="video-header">

          <div
            className="video-modal-icon"
            style={{
              backgroundColor: video.color,
              color: video.iconColor
            }}
          >
            {video.icon}
          </div>

          <div>

            <h2>{video.title}</h2>

            <div className="video-badges">

              <span>
                📚 {video.level}
              </span>

              <span>
                ⏱ {video.duration}
              </span>

            </div>

          </div>

        </div>

        <div className="video-divider"></div>

        <h3>O que você aprenderá</h3>

        <ul className="video-topics">

          {video.topics.map((topic, index) => (

            <li key={index}>
              ✅ {topic}
            </li>

          ))}

        </ul>

        <div className="video-divider"></div>

        <h3>Descrição</h3>

        <p className="video-description">

          {video.text}

        </p>

        <div className="video-actions">

          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="watch-btn"
          >
            Acessar conteúdo →
          </a>

          <button
            className="close-btn"
            onClick={onClose}
          >
            X
          </button>

        </div>

      </div>

    </div>

  );
}
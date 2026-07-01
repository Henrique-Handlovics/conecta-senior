export default function ModalAssuntos({
  assunto,
  onClose
}) {

  if (!assunto) return null;

  return (
    <div className="overlay">

      <div className="modal">

        <button
          className="close-btn"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="modal-icon">
          {assunto.icon}
        </div>

        <h2>
          {assunto.title}
        </h2>

        <p className="modal-text">
          {assunto.content}
        </p>

        <button
          className="confirm-btn"
          onClick={onClose}
        >
          Entendi
        </button>

      </div>

    </div>
  );
}
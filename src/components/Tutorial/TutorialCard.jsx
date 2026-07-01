export default function TutorialCard({
  tutorial,
  onOpen
}) {

  return (

    <article className="tutorial-card">

      <div className="tutorial-icon">
        {tutorial.icon}
      </div>

      <h3>
        {tutorial.title}
      </h3>

      <p>
        {tutorial.description}
      </p>

      <button
        onClick={() => onOpen(tutorial)}
      >
        Ver tutorial
      </button>
      

    </article>

  );
}
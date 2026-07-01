import "./quiz.css";

export default function ResultCard({
  score,
  total,
  onRestart
}) {

  const percentage = (score / total) * 100;

  let title = "";
  let message = "";
  let emoji = "";
  let color = "";

  if (percentage === 100) {
    title = "Excelente!";
    message =
      "Você demonstrou muito conhecimento sobre tecnologia e segurança digital. Continue assim!";
    emoji = "🏆";
    color = "#16A34A";
  }

  else if (percentage >= 70) {
    title = "Muito Bem!";
    message =
      "Você está no caminho certo. Continue praticando e aprendendo novos recursos.";
    emoji = "👏";
    color = "#2563EB";
  }

  else if (percentage >= 40) {
    title = "Bom Trabalho!";
    message =
      "Você já aprendeu bastante, mas ainda pode revisar alguns conteúdos do site.";
    emoji = "📚";
    color = "#D97706";
  }

  else {
    title = "Continue Aprendendo!";
    message =
      "Não desanime! Aprender tecnologia leva tempo. Revise os conteúdos e tente novamente.";
    emoji = "💙";
    color = "#DC2626";
  }

  return (

    <div className="result-card">

      <div
        className="result-emoji"
        style={{
          backgroundColor: color
        }}
      >
        {emoji}
      </div>

      <h2>{title}</h2>

      <h3>

        Você acertou

        <span
          style={{
            color
          }}
        >
          {" "}
          {score} de {total}
        </span>

      </h3>

      <p>

        {message}

      </p>

      <div className="result-stars">

        {

          Array.from({ length: 5 }).map((_, index) => (

            <span key={index}>

              {

                index < Math.round((score / total) * 5)

                  ? "⭐"

                  : "☆"

              }

            </span>

          ))

        }

      </div>

      <button

        className="restart-btn"

        onClick={onRestart}

      >

        🔄 Refazer Quiz

      </button>

    </div>

  );

}
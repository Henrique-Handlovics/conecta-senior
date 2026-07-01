import "./quiz.css";

export default function QuestionCard({
  question,
  current,
  total,
  selected,
  onSelect,
  onNext
}) {

  const progress = ((current + 1) / total) * 100;

  return (

    <div className="quiz-card">

      <div className="quiz-progress">

        <div
          className="quiz-progress-fill"
          style={{
            width: `${progress}%`
          }}
        ></div>

      </div>

      <span className="quiz-counter">

        Pergunta {current + 1} de {total}

      </span>

      <h2 className="quiz-question">

        {question.question}

      </h2>

      <div className="quiz-options">

        {question.options.map((option, index) => (

          <button

            key={index}

            className={`quiz-option ${
              selected === index ? "selected" : ""
            }`}

            onClick={() => onSelect(index)}

          >

            <span className="option-letter">

              {String.fromCharCode(65 + index)}

            </span>

            <span>

              {option}

            </span>

          </button>

        ))}

      </div>

      <button

        className="quiz-next"

        onClick={onNext}

        disabled={selected === null}

      >

        {

          current === total - 1

            ? "Finalizar Quiz"

            : "Próxima Pergunta →"

        }

      </button>

    </div>

  );

}
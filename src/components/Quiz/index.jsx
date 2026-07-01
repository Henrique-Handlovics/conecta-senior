import { useState } from "react";

import "./quiz.css";

import { quizQuestions } from "./quizData";
import QuestionCard from "./QuestionCard";
import ResultCard from "./ResultCard";

export default function Quiz() {

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedOption, setSelectedOption] = useState(null);

  const [score, setScore] = useState(0);

  const [finished, setFinished] = useState(false);

  function handleNext() {

    if (selectedOption === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quizQuestions.length) {

      setCurrentQuestion(currentQuestion + 1);

      setSelectedOption(null);

    } else {

      setFinished(true);

    }

  }

  function restartQuiz() {

    setCurrentQuestion(0);

    setSelectedOption(null);

    setScore(0);

    setFinished(false);

  }

  return (

    <section
      className="quiz-section"
      id="quiz"
    >

      <div className="quiz-header">

        <span className="quiz-badge">
          Quiz Interativo
        </span>

        <h2>

          Teste seus conhecimentos

        </h2>

        <p>

          Responda às perguntas e descubra quanto você aprendeu sobre tecnologia e segurança digital.

        </p>

      </div>

      {

        finished ? (

          <ResultCard

            score={score}

            total={quizQuestions.length}

            onRestart={restartQuiz}

          />

        ) : (

          <QuestionCard

            question={quizQuestions[currentQuestion]}

            current={currentQuestion}

            total={quizQuestions.length}

            selected={selectedOption}

            onSelect={setSelectedOption}

            onNext={handleNext}

          />

        )

      }

    </section>

  );

}
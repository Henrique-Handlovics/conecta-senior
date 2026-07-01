import TutorialsSection from "./tutorial-section";
import "./tutorial.css";

export default function Tutoriais() {

  return (
    <section id="tutoriais" className="tutoriais">
      <div className="tutoriais-container">
        <h2 className="tutoriais-title">Tutoriais Passo a Passo</h2>
        <p className="tutoriais-description">
          Tutoriais simples para ajudar você a usar a tecnologia com mais
          confiança.
        </p>
      </div>
      
      <TutorialsSection /> 
    </section>
  );
}
  
import "./heroSection.css";
import heroIllustration from "../../assets/hero-illustration.svg";

export default function HeroSection() {
  return (
    <section className="hero-section" id="hero">

      <div className="hero-content">

        <span className="hero-badge">
          Inclusão Digital para Idosos
        </span>

        <h2>
          Aprenda tecnologia de forma simples e segura
        </h2>

        <p>
          O Conecta Senior foi criado para ajudar idosos a utilizarem
          a internet, aplicativos e serviços digitais com mais confiança
          e segurança.
        </p>

        <div className="hero-buttons">

          <a href="#assuntos" className="cta-button">
            Começar Agora
          </a>

          <a href="#tutoriais" className="secondary-button">
            Ver Tutoriais
          </a>

        </div>

      </div>

      <div className="hero-image">

        <div className="floating-icon whatsapp">
          📱
        </div>

        <div className="floating-icon shield">
          🔒
        </div>

        <div className="floating-icon internet">
          🌐
        </div>

        <img
          src={heroIllustration}
          alt="Idosos aprendendo tecnologia"
        />

      </div>

    </section>
  );
}
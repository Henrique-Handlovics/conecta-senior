import CardSection from '../CardSection'
import './assuntos.css'

export default function Assuntos() {
  return (
    <section id="assuntos" className="assuntos-section">
      <div className="assuntos-hero">
        <h2>Em que podemos ajudar?</h2>
        <p>Aprenda a navegar na internet de forma segura e eficiente.</p>
      </div>
      <div className="grid-cards">
          <CardSection />
      </div>
    </section>
  )
}


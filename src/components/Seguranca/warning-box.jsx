export default function WarningBox() {
  return (
    <div className="warning-box">

      <h3>
        ⚠️ Atenção!
      </h3>

      <p>
        Bancos nunca pedem:
      </p>

      <ul>

        <li>Senha bancária</li>

        <li>Código do PIX</li>

        <li>Código enviado por SMS</li>

        <li>Transferências para liberar valores</li>

      </ul>

      <strong>
        Em caso de dúvida, não faça a transferência.
      </strong>

    </div>
  );
}
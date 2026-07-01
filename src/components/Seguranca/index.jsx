import "./seguranca.css";

import SecurityCard from "./security-card";
import WarningBox from "./warning-box";

import { golpes } from "./golpes";

import {
  FaShieldHalved,
  FaLock,
  FaPhone,
  FaArrowRotateRight,
  FaCircleCheck
} from "react-icons/fa6";

export default function Security() {
  return (
    <section
      className="seguranca-section"
      id="seguranca"
    >

      <div className="seguranca-header">

        <span className="seguranca-badge">
          Segurança Digital
        </span>

        <h2>
          Proteja-se contra golpes online
        </h2>

        <p>
          Aprenda a identificar golpes comuns e utilize a internet
          com muito mais segurança.
        </p>

      </div>

      <h3 className="section-title">
        Golpes mais comuns
      </h3>

      <div className="security-grid">

        {golpes.map((golpe) => (

          <SecurityCard
            key={golpe.id}
            {...golpe}
          />

        ))}

      </div>

      <h3 className="section-title">
        Como se proteger
      </h3>

      <div className="tips-grid">

        <div className="tip-card">
          <FaLock />
          Nunca compartilhe suas senhas.
        </div>

        <div className="tip-card">
          <FaCircleCheck />
          Confira o nome antes de fazer um PIX.
        </div>

        <div className="tip-card">
          <FaPhone />
          Ligue antes de transferir dinheiro.
        </div>

        <div className="tip-card">
          <FaShieldHalved />
          Desconfie de ofertas milagrosas.
        </div>

        <div className="tip-card">
          <FaArrowRotateRight />
          Atualize seu celular regularmente.
        </div>

        <div className="tip-card">
          <FaCircleCheck />
          Utilize senhas fortes.
        </div>

      </div>

      <WarningBox />

    </section>
  );
}
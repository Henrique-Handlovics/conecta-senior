import { useState } from "react";

import CardAssuntos from "../CardAssuntos";
import ModalAssuntos from "./ModalAssuntos";
import { assuntos } from "./assuntos";

export default function AssuntosSection() {

  const [selectedAssunto, setSelectedAssunto] = useState(null);

  return (
    <>
      <div className="card-grid">
        {assuntos.map((assunto) => (
          <CardAssuntos
            key={assunto.id}
            assunto={assunto}
            onOpen={setSelectedAssunto}
          />
        ))}
      </div>

      <ModalAssuntos
        assunto={selectedAssunto}
        onClose={() => setSelectedAssunto(null)}
      />
    </>
  );
}
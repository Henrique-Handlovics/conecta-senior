import { useState } from "react";

import CardAssuntos from "../CardAssuntos";
import ModalAssuntos from "../Assuntos/ModalAssuntos";
import { assuntos } from "../Assuntos/assuntos";

export default function CardSection() {

  const [selectedAssunto, setSelectedAssunto] =
    useState(null);

  return (
    <>
      {
  assuntos.map((assunto) => (

    <CardAssuntos
      key={assunto.id}

      assunto={assunto}

      icon={assunto.icon}

      title={assunto.title}

      description={assunto.description}

      color={assunto.color}

      buttonColor={assunto.buttonColor}

      iconColor={assunto.iconColor}

      onOpen={setSelectedAssunto}

    />

  ))
}

      <ModalAssuntos
        assunto={selectedAssunto}
        onClose={() => setSelectedAssunto(null)}
      />

    </>
  );
}
import {
  FaWhatsapp,
  FaPix,
  FaGlobe,
  FaLock,
  FaTriangleExclamation,
  FaMobileScreenButton
} from "react-icons/fa6";

export const videos = [
  {
    id: 1,

    icon: <FaWhatsapp />,

    title: "Como usar o WhatsApp",

    description:
      "Aprenda a enviar mensagens, fotos e fazer chamadas pelo WhatsApp.",

    duration: "5 minutos",

    level: "Iniciante",

    color: "#DCFCE7",

    iconColor: "#16A34A",

    topics: [
      "Enviar mensagens",
      "Enviar fotos",
      "Enviar áudios",
      "Fazer chamadas",
      "Criar grupos"
    ],

    text: `
O WhatsApp é um dos aplicativos mais utilizados no mundo.

Neste vídeo você aprenderá:

• Como conversar com amigos e familiares.

• Como enviar fotos.

• Como gravar mensagens de voz.

• Como fazer ligações e videochamadas.

Lembre-se:
Nunca compartilhe códigos recebidos por SMS.
`,

    url: "https://www.whatsapp.com"
  },

  {
    id: 2,

    icon: <FaPix />,

    title: "PIX com Segurança",

    description:
      "Aprenda a utilizar o PIX sem cair em golpes.",

    duration: "4 minutos",

    level: "Iniciante",

    color: "#CCFBF1",

    iconColor: "#0F766E",

    topics: [
      "Cadastrar chave",
      "Conferir destinatário",
      "Evitar golpes",
      "Transferências seguras"
    ],

    text: `
O PIX é uma forma rápida de pagamento.

Neste vídeo você aprenderá:

• Como enviar um PIX.

• Como conferir o nome do destinatário.

• Como evitar golpes.

• Como cancelar uma operação suspeita.
`,

    url: "https://www.bcb.gov.br"
  },

  {
    id: 3,

    icon: <FaGlobe />,

    title: "Como navegar na Internet",

    description:
      "Pesquise informações utilizando sites confiáveis.",

    duration: "6 minutos",

    level: "Iniciante",

    color: "#DBEAFE",

    iconColor: "#2563EB",

    topics: [
      "Pesquisar no Google",
      "Sites confiáveis",
      "Favoritos",
      "Pesquisar imagens"
    ],

    text: `
Aprenda a utilizar a internet de forma segura.

Você verá:

• Como pesquisar.

• Como reconhecer sites confiáveis.

• Como acessar páginas oficiais.

• Como salvar favoritos.
`,

    url: "https://www.google.com"
  },

  {
    id: 4,

    icon: <FaLock />,

    title: "Senhas Seguras",

    description:
      "Aprenda a criar senhas fortes para proteger suas contas.",

    duration: "5 minutos",

    level: "Iniciante",

    color: "#EDE9FE",

    iconColor: "#7C3AED",

    topics: [
      "Criar senhas",
      "Evitar datas",
      "Guardar senhas",
      "Autenticação"
    ],

    text: `
Uma boa senha protege suas informações.

Você aprenderá:

• Como criar senhas fortes.

• O que nunca utilizar.

• Como armazenar senhas.

• Como aumentar sua segurança.
`,

    url: "https://www.bb.com.br"
  },

  {
    id: 5,

    icon: <FaTriangleExclamation />,

    title: "Golpes na Internet",

    description:
      "Conheça os golpes mais comuns e saiba como evitá-los.",

    duration: "7 minutos",

    level: "Iniciante",

    color: "#FEE2E2",

    iconColor: "#DC2626",

    topics: [
      "Golpe do PIX",
      "WhatsApp clonado",
      "Links falsos",
      "Fake News"
    ],

    text: `
A internet também possui riscos.

Neste conteúdo você aprenderá:

• Como identificar golpes.

• Como agir em situações suspeitas.

• Como pedir ajuda.

• Como denunciar golpes.
`,

    url: "https://www.gov.br"
  },

  {
    id: 6,

    icon: <FaMobileScreenButton />,

    title: "Primeiros passos no Celular",

    description:
      "Aprenda funções básicas do smartphone.",

    duration: "8 minutos",

    level: "Iniciante",

    color: "#FEF3C7",

    iconColor: "#D97706",

    topics: [
      "Tela inicial",
      "Abrir aplicativos",
      "Volume",
      "Configurações"
    ],

    text: `
Ideal para quem está começando.

Você aprenderá:

• Como utilizar a tela.

• Como abrir aplicativos.

• Como ajustar o volume.

• Como acessar configurações.
`,

    url: "https://www.android.com/intl/pt_br/"
  }
];
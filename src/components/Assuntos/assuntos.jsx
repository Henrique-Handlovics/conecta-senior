import {
  FaWhatsapp,
  FaLock,
  FaGlobe,
  FaPix,
  FaTriangleExclamation
} from "react-icons/fa6";

export const assuntos = [
  {
    id: 1,

    icon: <FaWhatsapp />,

    title: "Como usar o WhatsApp",

    description:
      "Aprenda a enviar mensagens e fazer chamadas.",

    color: "#DCFCE7",

    buttonColor: "#16A34A",

    buttonHover: "#15803D",

    iconColor: "#16A34A",

    modalColor: "#DCFCE7",

    modalAccent: "#16A34A",

    content: `
O WhatsApp é um aplicativo de mensagens muito utilizado para conversar com amigos e familiares.

✓ Enviar mensagens;

✓ Compartilhar fotos e vídeos;

✓ Fazer chamadas;

✓ Fazer videochamadas;

✓ Nunca compartilhar códigos recebidos por SMS.
`
  },

  {
    id: 2,

    icon: <FaLock />,

    title: "Senhas Seguras",

    description:
      "Descubra como proteger suas contas.",

    color: "#EDE9FE",

    buttonColor: "#7C3AED",

    buttonHover: "#6D28D9",

    iconColor: "#7C3AED",

    modalColor: "#F5F3FF",

    modalAccent: "#7C3AED",

    content: `
✓ Misture letras e números;

✓ Evite datas de nascimento;

✓ Não compartilhe suas senhas;

✓ Troque senhas importantes periodicamente.
`
  },

  {
    id: 3,

    icon: <FaTriangleExclamation />,

    title: "Golpes Online",

    description:
      "Saiba identificar mensagens suspeitas.",

    color: "#FEE2E2",

    buttonColor: "#DC2626",

    buttonHover: "#B91C1C",

    iconColor: "#DC2626",

    modalColor: "#FEF2F2",

    modalAccent: "#DC2626",

    content: `
✓ Desconfie de links suspeitos;

✓ Não forneça códigos de confirmação;

✓ Verifique a identidade da pessoa;

✓ Em caso de dúvida, procure ajuda.
`
  },

  {
    id: 4,

    icon: <FaGlobe />,

    title: "Navegação na Internet",

    description:
      "Aprenda a acessar sites confiáveis.",

    color: "#DBEAFE",

    buttonColor: "#2563EB",

    buttonHover: "#1D4ED8",

    iconColor: "#2563EB",

    modalColor: "#EFF6FF",

    modalAccent: "#2563EB",

    content: `
✓ Utilize sites conhecidos;

✓ Verifique se o endereço começa com https://;

✓ Evite links suspeitos;

✓ Desconfie de promoções exageradas.
`
  },

  {
    id: 5,

    icon: <FaPix />,

    title: "PIX com Segurança",

    description:
      "Aprenda a fazer transferências seguras.",

    color: "#CCFBF1",

    buttonColor: "#0F766E",

    buttonHover: "#115E59",

    iconColor: "#0F766E",

    modalColor: "#F0FDFA",

    modalAccent: "#0F766E",

    content: `
✓ Confira o nome do destinatário;

✓ Nunca faça transferências sob pressão;

✓ Desconfie de pedidos urgentes;

✓ Em caso de dúvida, procure o banco.
`
  },

  {
    id: 6,

    icon: <FaTriangleExclamation />,

    title: "Fake News",

    description:
      "Aprenda a identificar notícias falsas.",

    color: "#FEF3C7",

    buttonColor: "#D97706",

    buttonHover: "#B45309",

    iconColor: "#D97706",

    modalColor: "#FFFBEB",

    modalAccent: "#D97706",

    content: `
✓ Leia a notícia completa;

✓ Verifique a fonte;

✓ Pesquise em outros sites;

✓ Não compartilhe em caso de dúvida.
`
  }
];
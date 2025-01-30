export const categorias = [
    {
      nome: "Alimentos",
      produtos: [
        { id: "laticinios", nome: "Laticínios" },
        { id: "bebidas", nome: "Bebidas" },
        { id: "frigorificos", nome: "Frigoríficos" },
        { id: "processadoras", nome: "Processadoras de Alimentos" },
        { id: "mercados", nome: "Mercados" },
        { id: "panificadoras", nome: "Panificadoras" },
        { id: "confeitarias", nome: "Confeitarias" }
      ]
    },
    {
      nome: "Cozinhas Industriais e Restaurantes",
      produtos: [
        { id: "cozinhas", nome: "Cozinhas Industriais" },
        { id: "fast-food", nome: "Fast Foods" },
        { id: "bares", nome: "Bares" },
        { id: "lanchonetes", nome: "Lanchonetes e Restaurantes" }
      ]
    }
    
  ];

  export const produtos: { [key: string]: { imagem: string; titulo: string; descricao: string; cor: string; diluicao: string }[] } = {
    laticinios: [
      {
        imagem: "assets/images/kimi-klap.png",
        titulo: "Desengordurante e Desengraxante Alcalino",
        descricao: "Kimi Klap - BB Preta",
        cor: "Laranja",
        diluicao: "1 a 10%"
      },
      {
        imagem: "assets/images/kimi-klore.png",
        titulo: "Sanitizante Clorado",
        descricao: "Kimi Klore",
        cor: "Incolor a amarelo",
        diluicao: "1 a 10%"
      }
    ],
    bebidas: [
      {
        imagem: "assets/images/kimi-klap.png",
        titulo: "Desengordurante e Desengraxante Alcalino",
        descricao: "Kimi Klap - BB Preta",
        cor: "Laranja",
        diluicao: "1 a 10%"
      }
    ]
  };
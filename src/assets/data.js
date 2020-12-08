import { v4 as uuidv4 } from "uuid";
function chillHop() {
  return [
    {
      name: "Boca de leite",
      cover:
        "https://assets.lucasf.com.br/images/boca-de-leite-cover-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      transcript: "Ai não boca de leite",
      audio: "https://assets.lucasf.com.br/audio/boca_de_leite.mp3",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
    },
    {
      name: "Fora do Brasil",
      cover:
        "https://assets.lucasf.com.br/images/tava-fora-do-brasil-cover-1024x1024.jpg",
      artist: "Aiguille",
      transcript: "Tava fora do pais ?",
      audio: "https://assets.lucasf.com.br/audio/fora_do_brasil.mp3",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
    },
    {
      name: "Bagulho Retrô",
      cover:
        "https://assets.lucasf.com.br/images/bagulho-retro-1024x1024.jpg",
      artist: "Swørn",
      transcript: "Faz de proposito",
      audio: "https://assets.lucasf.com.br/audio/bagulho_retro.mp3",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
    },
    {
      name: "Não acompanha o grupo",
      cover:
        "https://assets.lucasf.com.br/images/ja-foi-postado-cover-1024x1024.jpg",
      artist: "Aiguille",
      transcript: "Ta chegando mensagem repetida",
      audio: "https://assets.lucasf.com.br/audio/acompanha_o_grupo.mp3",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
    },
    {
      name: "Todo mundo já viu",
      cover:
        "https://assets.lucasf.com.br/images/todo-mundo-ja-viu-cover-1024x1024.jpg",
      artist: "Swørn",
      transcript: "O colega mandou hoje de manhã",
      audio: "https://assets.lucasf.com.br/audio/todo_mundo_ja_viu.mp3",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
    },
  ];
}

export default chillHop;

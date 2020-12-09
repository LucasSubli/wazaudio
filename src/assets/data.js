import { v4 as uuidv4 } from "uuid";
function chillHop() {
  return [
    {
      name: "Boca de leite",
      cover:
        "https://assets.lucasf.com.br/images/boca-de-leite-cover-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      transcript: "Ai não, ai não boca de leite. Pô repetida ? De novo ? Aí não boca de leite. Porra. Demora para caralho para botar o bagulho quando bota, bota essa porra repetida ? Bota o cu viado.",
      audio: "https://assets.lucasf.com.br/audio/boca_de_leite.mp3",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
    },
    {
      name: "Fora do Brasil",
      cover:
        "https://assets.lucasf.com.br/images/tava-fora-do-brasil-cover-1024x1024.jpg",
      artist: "Aiguille",
      transcript: "Tava fora do Brasil, irmão ? Tu tava fora do Brasil, irmão ? Viajou ? Passeou ? Qual foi ? Passaporte carimbado ? Qual foi ? Porra, o bagulho foi postado há duas semanas atrás, tu tá repetindo hoje meu irmão ?",
      audio: "https://assets.lucasf.com.br/audio/fora_do_brasil.mp3",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
    },
    {
      name: "Bagulho Retrô",
      cover:
        "https://assets.lucasf.com.br/images/bagulho-retro-1024x1024.jpg",
      artist: "Swørn",
      transcript: "Pô maluco qual foi a do bagulho ? O bagulho hoje é retrô ? O bagulho hoje é retrô mano ? Tu ta mandando o bagulho de dez anos atrás, o bagulho hoje é retrô ? É ? É pra mandar bagulho de dez anos atrás ? Pô, se liga porra (x2). Pega ritmo caralho. Porra. Caralho. Tira esse cara do grupo aí mermão, dá um gancho nele para ele parar com essa mancada. Porra, que mancada é essa porra ?",
      audio: "https://assets.lucasf.com.br/audio/bagulho_retro.mp3",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
    },
    {
      name: "Não acompanha o grupo",
      cover:
        "https://assets.lucasf.com.br/images/ja-foi-postado-cover-1024x1024.jpg",
      artist: "Aiguille",
      transcript: "Isso já foi postado de manhã cedo aí o viado. Acompanha a porra do grupo, caralho. Porra encheu o cú de cachaça ontem aí e não acompanhou a porra do grupo de manhã cedo, começou a trabalhar tarde aí, igual vagabundo, e agora fica postando porra repetida. Bota teu cú. Filha da puta. Bota o cú.",
      audio: "https://assets.lucasf.com.br/audio/acompanha_o_grupo.mp3",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
    },
    {
      name: "Todo mundo já viu",
      cover:
        "https://assets.lucasf.com.br/images/todo-mundo-ja-viu-cover-1024x1024.jpg",
      artist: "Swørn",
      transcript: "Todo mundo já viu essa porra, filho da puta!",
      audio: "https://assets.lucasf.com.br/audio/todo_mundo_ja_viu.mp3",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
    },
  ];
}

export default chillHop;

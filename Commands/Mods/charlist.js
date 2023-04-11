module.exports = {
  name: "charlist",
  alias: ["characterlist", "botcharacterlist"],
  desc: "Ban a member",
  category: "Mods",
  usage: "setchar 0/1",
  react: "😈",
  start: async (Miku, m, { text, prefix ,modStatus}) => {

    let txt = `       『  *Bot Charactes*  』\n\n\n_0 - Andrew tate_\n\n_1 - Andrew tate you can do it_\n`;

    let botLogos = [
        'https://i.imgur.com/aFpGb8y_d.webp',
        'https://i.imgur.com/aFpGb8y_d.webp',
        
    ];

    let randomimage = botLogos[Math.floor(Math.random() * botLogos.length)];
   
    let sections = [] 
    let chars = ['Andrew tate', 'Andrew tate you can do it']
    let buttonDesc =[`Set bot character to Andrew tate`, `Set bot character to Andrew tate you can do it`]
    let buttonTexts = [`${prefix}setchar 0`, `${prefix}setchar 1`]
    
    for (let i = 0; i < chars.length; i++) {
        const list = {title: `${prefix}setchar ${i}`,
        rows: [
        
                {
                 title: `${chars[i]}`, 
                 rowId: `${buttonTexts[i]}`,
                 description: `${buttonDesc[i]}`
                }
                ]
             }
                sections.push(list)
            }


    let buttonMessage = {
      //image: { url: randomimage },
      text: txt,
      footer: `*${botName}*`,
      buttonText: "Choose Character",
      sections,
    };

    Miku.sendMessage(m.from, buttonMessage, { quoted: m });
  },
};

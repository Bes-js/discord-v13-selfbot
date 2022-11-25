const { Client,MessageEmbed} = require('discord.js-selfbot-v13');
const client = global.client = new Client({checkUpdate:false});
const { CustomStatus } = require('discord.js-selfbot-rpc');
var clc = require("cli-color");
require('dotenv').config();


// ███████╗\n██╔════╝\n██████╗░\n╚════██╗\n██████╔╝\n╚═════╝░ bu ne derseniz can sıkıntısı oyalandım :/

client.on('ready', async()=>{ 
console.log(clc.redBright(clc.bold("███████╗\n██╔════╝\n██████╗░\n╚════██╗\n██████╔╝\n╚═════╝░")));
console.log(clc.greenBright(clc.bold("███████╗\n██╔════╝\n██████╗░\n╚════██╗\n██████╔╝\n╚═════╝░")));
console.log(clc.blueBright(clc.bold("███████╗\n██╔════╝\n██████╗░\n╚════██╗\n██████╔╝\n╚═════╝░")));
console.log(clc.greenBright(clc.bold("[BEŞ] ~ #"+client.user.username +" Hesabına Giriş Yapıldı!")));

    let status = 'dnd'; // Rahatsız Etmeyin = "dnd" // Boşta = "idle" // Çevrimiçi = "online"
    let state = 'Beş Was Here'; // Durumunuzda Yazmasını İstediğiniz Şey
    let emoji = '🍬'; // Durumunuzda Gözükücek Olan Emoji

 const beş = new CustomStatus()
        .setStatus(status) 
        .setState(state)
        .setEmoji(emoji);

    client.user.setPresence(beş.toData());
    console.log(clc.blueBright(clc.bold("[BEŞ] ~ #Presence Status Ayarlandı!")));
    console.log(clc.yellowBright(clc.bold("███████╗\n██╔════╝\n██████╗░\n╚════██╗\n██████╔╝\n╚═════╝░")));
    console.log(clc.redBright(clc.bold("███████╗\n██╔════╝\n██████╗░\n╚════██╗\n██████╔╝\n╚═════╝░")));
    console.log(clc.greenBright(clc.bold("███████╗\n██╔════╝\n██████╗░\n╚════██╗\n██████╔╝\n╚═════╝░")));

})
  
// Mantık discord.js ile aynı aşşağıda basit örnek ile gösterdim

client.on('messageCreate', async(message) => {
   if(message.author.bot)return;
   if(message.author.id == client.user.id)return;

   if(message.content.toLowerCase().includes("sa")){message.reply(`> **Aleyküm Selam :)**`);}
   if(message.content.toLowerCase().includes("nasılsın")){message.reply(`> **İyiyim Sen Nasılsın?**`);}
    
});


// '.env' Dosyasını Doldurunuz ~ Şu Şekilde Olması Gerekiyor ||  token=<tokeniniz>

client.login(process.env.token);
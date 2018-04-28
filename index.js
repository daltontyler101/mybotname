const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs")
let config = JSON.parse(fs.readFileSync("./config.json", "utf8"));
var prefix = ('/') ;

client.on("ready", () => {

  console.log('Bot is currently online, Dal.')

  client.user.setActivity(' Retronix | /help ')
});



client.on("guildCreate", guild => {
// This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
guild.defaultChannel.sendMessage(`I have joined ${guild.name}`)

});

//client.on('', '' ->{});







client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);

});

client.on("guildMemberAdd", member =>{
let guild = member.guild;
guild.defaultChannel.sendMessage(`Welcome ${member.user.username}`)
});



client.on("message", async message => {

if (message.author.bot)return;

  if (message.content.toLowerCase().startsWith(prefix + 'ping')) {

     message.channel.send('pong');

  } else


if (message.content.toLowerCase().startsWith('hi')) {

  message.channel.send('Hello, How are you')
}

if (message.content.toLowerCase().startsWith('im')) {

  message.channel.send('thats good ig :smile:')
}


const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

if (message.content.toLowerCase().startsWith(prefix + 'say')) {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use.
    // To get the "message" itself we join the `args` back into a string with spaces:
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{});
    // And we get the bot to say the thing:
    message.channel.send(sayMessage);
  }


  if (message.content.toLowerCase().startsWith(prefix + 'help')) {

    // React to a message with a unicode emoji
    message.react('👌')
     //RichEmbed

const embed = new Discord.RichEmbed()

.setTitle("Help Options")
.setColor(0x009933)
.setThumbnail('https://cdn.discordapp.com/attachments/427221277691084800/436678631847362560/A_2.png')
.addField('~ ~ ~ ~ ~ ~ ~ ~ ~', 'OPTIONS:')
.addField('help', 'Opens the help menu')
.addField('ping', 'Shows the API ping')
.addField('avatar', 'Send a image of **Your** Avatar')
.addField('online', 'Tests to see if the bot is online')
.addField('format','Shows the formats for sections')
.addField('suggest', '/suggest [suggestion]')
.addField('apply', 'Send Age and Why you want to be on the team!')
.addField('link', 'Sends link to "Retronix Chat Center" ')
.addField('report (/pr)','sends a report to the owner personally')
.setFooter("The bot's prefix is  /");


message.channel.send({embed});

}


if (message.channel.type == 'dm'){
const embed = new Discord.RichEmbed()
.setTitle("Dm Messages")
.setColor(0x009933)
.addField('Author: ' + message.author.tag, '= = = = = = = = = = = = = = = = =')
.addField('Message: ' + message, '= = = = = = = = = = = = = = = = =')
client.guilds.get('430072479797739520').channels.get('434850253506871296').send({embed});
}

if (message.channel.type == 'dm'){
client.guilds.get('430072479797739520').channels.get('434850253506871296').send('@everyone')
}




//he said
if (message.content.startsWith(prefix + 'dm')) {
  let args = message.content.slice(prefix.length).trim().split(/ +/g);
let target = message.mentions.members.first()
let text = args.slice(1).join(' ');
target.send(text);
message.delete()
console.log(`~ ~ ~ Message was sent sucsufully by: ${message.author} with saying "${message.content}" ~ ~ ~`)
}
//he said




// // /// ///////////////////////////////

//////////////////////////////////////////

  // If the message is "what is my avatar"
  if (message.content.toLowerCase().startsWith(prefix + 'avatar')) {
    // Send the user's avatar URL
    message.reply('here you go!                                          [' + message.author.avatarURL + ']');

    // React to a message with a unicode emoji
  message.react('👌')
    .then(console.log)
    .catch(console.error);
  }



//KICKING

if(message.content.toLowerCase().startsWith(prefix + 'kick')) {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit:
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.roles.some(r=>["Administrator", "Moderator","👑 Creator 👑"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");

    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable)
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");

    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";

    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

  }
//KICKING

if (message.content.toLowerCase().startsWith(prefix + 'console.log')) {
  console.log(`${message.author} I have just logged at: ${message.createdAt}`)
  return;
}

//Tests Secton

//suggest

if (message.content.toLowerCase().startsWith(prefix + 'suggest')) {
    message.delete();

    let args = message.content.split(' ').slice(1).join(' ');
    if (!args) return;

    client.channels.get('436319818250190858').send(`${message.author}'s suessestion is: ${args}`);

    message.channel.send(`${message.author}, your suggestion has been sent!`);
    return;
}

//apply

if (message.content.toLowerCase().startsWith(prefix + 'apply')) {
    message.delete();

    let args = message.content.split(' ').slice(1).join(' ');
    if (!args) return;

    client.channels.get('436320863269290015').send(`[@here]  ${message.author} **sent their application:**    ${args}`);

    message.channel.send(`${message.author}, your staff application has been sent successfully!`);
    return;
}
//application format


if (message.content.toLowerCase().startsWith(prefix + 'formats')) {
const embed = new Discord.RichEmbed()
.setTitle('FORMATS')
.setDescription('This is formats for the following:')
.addField(' ~', '~')
.addField('Suggestion', '/suggestion [your suggestion/ideas/thoughts]')
.addField(' ~', '~')
.addField('Staff Application','/apply [Age , Why you want to be on the staff team, and anything else about you]')
.addField(' ~', '~')
.addField('Reports', '/report [players name youre reporting, what they did]')
.addField(' ~', '~')
.setFooter('More Comming Soon!');

message.channel.send({embed});
}

//report

if (message.content.toLowerCase().startsWith(prefix + 'report')) {
    message.delete();

    let args = message.content.split(' ').slice(1).join(' ');
    if (!args) return;

    client.channels.get('436681733014945802').send(`[@here]    ${message.author} **sent a report**:    ${args}`);

message.delete().catch(O_o=>{});

    message.channel.send('The owner has got your report! You will get a DM shortly!');
    return;
}

//report short
if (message.content.toLowerCase().startsWith(prefix + 'pr')) {
    message.delete();

    let args = message.content.split(' ').slice(1).join(' ');
    if (!args) return;

    client.channels.get('436681733014945802').send(`[@here]    ${message.author} **sent a report**:    ${args}`);

message.delete().catch(O_o=>{});

    message.channel.send('The owner has got your report! You will get a DM shortly!');
    return;

}


if (message.content.toLowerCase().startsWith(prefix + 'invite'))[
  message.channel.send({embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "Click To Invite",
      url: "https://discordapp.com/oauth2/authorize?client_id=431917693386358797&permissions=0&scope=bot",


      timestamp: new Date(),
      footer: {
        text: "© Retronix Chat Center"
      }
    }
  })];
//Log command


//log command

//announcement









if (message.content.toLowerCase().startsWith(prefix + 'link')) {
message.channel.send('https://discord.gg/tHbR4sY')
}
//purge

if (message.content.toLowerCase().startsWith(prefix + 'purge')) {
    // This command removes all messages from all users in the channel, up to 100.

    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);

    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");

    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }

//BAN

if(message.content.toLowerCase().startsWith(prefix + 'ban')) {
  // Most of this command is identical to kick, except that here we'll only let admins do it.
  // In the real world mods could ban too, but this is just an example, right? ;)
  if(!message.member.roles.some(r=>["Administrator", "👑 Creator 👑"].includes(r.name)) )
    return message.reply("Sorry, you don't have permissions to use this!");

  let member = message.mentions.members.first();
  if(!member)
    return message.reply("Please mention a valid member of this server");
  if(!member.bannable)
    return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

  let reason = args.slice(1).join(' ');
  if(!reason) reason = "No reason provided";

  await member.ban(reason)
    .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
  message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
}
//BAN

if (message.author.bot)return;


  if (message.content.toLowerCase().startsWith(prefix + 'online')) {

     message.channel.send(`${message.author}, I am online! Thanks for checking on me!`);

  }


});




client.login(config.token);

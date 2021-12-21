<div align="center">
  <h1>ZeroApi Wrapper</h1>
  <p>
    <a href="https://www.npmjs.com/package/popcat-wrapper"><img src="https://img.shields.io/npm/v/zeroapi-wrapper?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/popcat-wrapper"><img src="https://img.shields.io/npm/dt/zeroapi-wrapper?maxAge=3600" alt="NPM downloads" /></a>
  </p>
  <p>
    <a href="https://www.npmjs.com/package/popcat-wrapper"><img src="https://nodei.co/npm/zeroapi-wrapper.png?downloads=true&stars=true" alt="NPM Banner"></a>
  </p>
</div>

# Community
<p>Join <a href="https://discord.gg/7MEZZHD6Wh">Our Server</a> If you want to have fun or need any support!</p>
 
## Installation
```
npm i zeroapi-wrapper
```

## Examples

### ISS command, no input example:
```js
const zeroapi = require("zeroapi-wrapper");
const apiclient = new zeroapi({ token: "Your Apikey" });
const Discord = require("discord.js")
const client = new Discord.Client()


client.on("message", async message => {
if (message.content.toLowerCase() === "/iss") {
  apiclient.iss().then(data => { message.channel.send(data) });
}
})

client.login("bot token")

```

### Alert command, 1 text input example
```js
const zeroapi = require("zeroapi-wrapper");
const apiclient = new zeroapi({ token: "Your Apikey" });
const Discord = require('discord.js')
const TEXT = "Test20"

const img = await apiclient.alert({ "text": TEXT })
let attachment = new MessageAttachment(img, "alert.png");
message.channel.send(attachment);
```

###  Drake meme command, more than one text input example
```js
const zeroapi = require("zeroapi-wrapper");
const apiclient = new zeroapi({ token: "Your Apikey" });
const Discord = require('discord.js')

const text1 = "text 1"
const text2 = "text2 2"
const img = await apiclient.pooh({ "text": text1, "text1": text2 })
const image = new Discord.MessageAttachment(img, "drake.png")
message.channel.send(image)

```

### Drip command, image input example
```js
const Discord = require("discord.js");
const zeroapi = require("zeroapi-wrapper");
const apiclient = new zeroapi({ token: "Your Apikey" });

let user = message.mentions.users.first() || message.author
const av = user.displayAvatarURL()

const image = await apiclient.drip({ "avatar": av })

const attachment = new Discord.MessageAttachment(image, "drip.png");
message.channel.send(attachment);
```

### Color command, object output example:

```js
const zeroapi = require("zeroapi-wrapper");
const apiclient = new zeroapi({ token: "Your Apikey" });

const githubuser = "NotZer0Two"
apiclient.github({ "username": githubuser }).then(data => { console.log(data); });
 /**
{
 "username": "NotZer0Two",
 "avatar": "https://avatars.githubusercontent.com/u/63092138?v=4",
 "url": "https://github.com/NotZer0Two",
 "location": "My Home",
 "email": "No email",
 "company": "==================",
 "blog": "https://notzerotwo.ml/",
 "bio": "Write on dms for a commision",
 "twitter": "Zer0Two5",
 "repos": 15,
 "followers": 5,
 "following": 1,
 "created_at": "2020-04-03T06:51:57Z",
 "updated_at": "2021-11-21T10:16:08Z"
}*/
```
for collectin followers for example you need to do:

`
console.log(data.followers);
` (that is the exact followers '5')

 This method applies for covid, color, crypto, github, hypixel, npm, weatcher, iss, youtube, songinfo, spotifyuser, fortnite, animesearch, _8ball, advice, catfact, chatbot, dadjoke, fact, meme, wouldyourather, cve, dangeroususer, domain, stackoverflow, compiler, decodebinary, emojify, encodebinary, question, translate, zalgo, story, uselessfacts, meals, morse, socceroredictor

## Endpoints
You can get a full list of the possible API endpoints [Here](https://github.com/ZeroRaidStudios/api.notzerotwo.ml)

## Support 
Open a issues if something for the wrapper make an issues here

or

Join Our Discord Server! [Link](https://discord.gg/7MEZZHD6Wh)

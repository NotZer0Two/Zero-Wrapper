<div align="center">
  <h1>ZeroApi Wrapper</h1>
  <p>
    <a href="https://www.npmjs.com/package/zeroapi-wrapper"><img src="https://img.shields.io/npm/v/zeroapi-wrapper?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/zeroapi-wrapper"><img src="https://img.shields.io/npm/dt/zeroapi-wrapper?maxAge=3600" alt="NPM downloads" /></a>
    <a href="https://discord.gg/7MEZZHD6Wh"><img src="https://i.imgur.com/zRe6pvG.png" alt="Discord Server" /></a>
  </p>
  <p>
    <a href="https://www.npmjs.com/package/zeroapi-wrapper"><img src="https://nodei.co/npm/zeroapi-wrapper.png?downloads=true&stars=true" alt="NPM Banner"></a>
  </p>
</div>

---

# Community
<p>Welcome to ZeroApi Wrapper Docs Section</p>
 
## Installation
```
npm i zeroapi-wrapper
```

## Examples
### Basic Login

```javascript
const zeroapi = require("zeroapi-wrapper");
const apiclient = new zeroapi({ token: "Your Apikey" }); // you can get one joining the discord

//And all the code 
```

### Json Response | How to get it

```javascript
const zeroapi = require("zeroapi-wrapper");
const apiclient = new zeroapi({ token: "Your Apikey" }); // you can get one joining the discord

const githubuser = "NotZer0Two"
apiclient.github({ "username": githubuser }).then(data => { console.log(data); });

// or
// const githubfetch = await apiclient.github({ "username": githubuser })
// console.log(githubfetch)

// The response
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

for example i want pick up the twitter, you can do it with
```javascript
console.log(data.twitter);

//Zer0Two5 <= this is the data will be show up for example in console
```

Note: This method applies for covid, color, crypto, github, hypixel, npm, weatcher, iss, youtube, songinfo, spotifyuser, fortnite, animesearch, _8ball, advice, catfact, chatbot, dadjoke, fact, meme, wouldyourather, cve, dangeroususer, domain, stackoverflow, compiler, decodebinary, emojify, encodebinary, question, translate, zalgo, story, uselessfacts, meals, morse, socceroredictor

### Image Response | How to get it

```js
const Discord = require("discord.js");
const zeroapi = require("zeroapi-wrapper");
const apiclient = new zeroapi({ token: "Your Apikey" });

let user = message.mentions.users.first() || message.author
const av = user.displayAvatarURL()

const image = await apiclient.gigachad({ "avatar": av, "type": "god or normal" })

const attachment = new Discord.MessageAttachment(image, "gigagod.png");
message.channel.send(attachment);
```

and the result will be 

<img src="https://cdn.discordapp.com/attachments/823605956348608512/923597834115235890/gigachad.png" alt="Giga Chad Example" />

Note: This method applies for all image section endpoint


## Faq

- where i can get an apikey? (**Just join our discord and open a ticket**)
- if i find a bug how i can report it? (**if the bug is a vunerability for login without or cause problem in dms or if its for a code issues here on github**)
- why error close my code saying "[ZeroApi] Error: "The error" " (**This is cause of an error that can be yours or of the api Open a issues for that**)
- there are some apikey for testing it? (**No and we are not thinking to add it**)
- There is a rate limit system? (**Yes**)
- where i can find all the endpoint? (**Here: https://github.com/ZeroRaidStudios/api.notzerotwo.ml**)

## Support 
Open a issues if something for the wrapper make an issues here

or

Join Our Discord Server! [Link](https://discord.gg/7MEZZHD6Wh)

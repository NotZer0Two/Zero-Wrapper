const fetch = require('node-fetch')
// Auth Client Section
class AuthClient {

    constructor({ token }) {
        if (!token) throw new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide An Apikey To Use ZeroApi Wrapper\x1b[0m")
        this.token = token;
        fetch(`https://api.notzerotwo.ml/admin/test?api=${token}`)
            .then(res => res.json())
            .then(json => {
                if (json.error) {
                    throw new TypeError('\x1b[31m[ZeroApi Wrapper] Error: Invalid Apikey\x1b[0m')
                }
                if (json.message) {
                    console.log('\x1b[32m[ZeroApi Wrapper] Connected to ZeroApi Server\x1b[0m')
                    console.log('\x1b[32m[ZeroApi Wrapper] Started Without problem\x1b[0m')
                }
            })
    }
    async covid(country) {
        if (!country) {
            let image = await fetch(`https://api.notzerotwo.ml/data/covid?api=${this.token}`)
            let json = await image.json()

            if (json.error) {
                throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
            }

            return json
        } else if (country) {
            //remove the quotes from the country name
            let image = await fetch(`https://api.notzerotwo.ml/data/covid?api=${this.token}&country=${JSON.stringify(country.country).replace(/['"]+/g, '')}`)
            let json = await image.json()

            if (json.error) {
                throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
            }

            return json
        }
    }
    //Color Section
    async color(hex) {
        if (!hex) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A Hex Color To Convert\x1b[0m")
        let image = await fetch(`https://api.notzerotwo.ml/data/colorinfo?api=${this.token}&hex=${JSON.stringify(hex.hex).replace(/['"]+/g, '')}`)
        let json = await image.json()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async crypto(currency, convert) {
        if (!currency) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A Crypto Currency\x1b[0m")
        if (convert) {

            let image = await fetch(`https://api.notzerotwo.ml/data/crypto?api=${this.token}&currency=${JSON.stringify(currency.currency).replace(/['"]+/g, '')}&convert=${JSON.stringify(convert.convert).replace(/['"]+/g, '')}`)
            let json = await image.json()

            if (json.error) {
                throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
            }

            return json
        } else {
            let image = await fetch(`https://api.notzerotwo.ml/data/crypto?api=${this.token}&currency=${JSON.stringify(currency.currency).replace(/['"]+/g, '')}`)
            let json = await image.json()

            if (json.error) {
                throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
            }

            return json
        }
    }
    async github(username) {
        if (!username) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A Username\x1b[0m")
        let image = await fetch(`https://api.notzerotwo.ml/data/github?api=${this.token}&user=${JSON.stringify(username.username).replace(/['"]+/g, '')}`)
        let json = await image.json()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async hypixel(username) {
        if (!username) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A Username\x1b[0m")
        let image = await fetch(`https://api.notzerotwo.ml/data/hypixel?api=${this.token}&player=${JSON.stringify(username.username).replace(/['"]+/g, '')}`)
        let json = await image.json()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async npm(packet) {
        if (!packet) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A Packet\x1b[0m")
        let image = await fetch(`https://api.notzerotwo.ml/data/npm?api=${this.token}&package=${JSON.stringify(packet.packet).replace(/['"]+/g, '')}`)
        let json = await image.json()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async weatcher(location) {
        if (!location) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A Location\x1b[0m")
        let image = await fetch(`https://api.notzerotwo.ml/data/weather?api=${this.token}&location=${JSON.stringify(location.location).replace(/['"]+/g, '')}`)
        let json = await image.json()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async iss() {
        let image = await fetch(`https://api.notzerotwo.ml/data/iss?api=${this.token}`)
        let json = await image.json()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async youtube(id) {
        if (!id) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A Youtube Channel ID\x1b[0m")
        let image = await fetch(`https://api.notzerotwo.ml/data/youtubeinfo?api=${this.token}&id=${JSON.stringify(id.id).replace(/['"]+/g, '')}`)
        let json = await image.json()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async songinfo(id) {
        if (!id) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A Spotify Song ID\x1b[0m")
        let image = await fetch(`https://api.notzerotwo.ml/data/songinfo?api=${this.token}&songid=${JSON.stringify(id.id).replace(/['"]+/g, '')}`)
        let json = await image.json()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async spotifyuser(id) {
        if (!id) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A User Spotify ID\x1b[0m")
        let image = await fetch(`https://api.notzerotwo.ml/data/spotifyuser?api=${this.token}&userid=${JSON.stringify(id.id).replace(/['"]+/g, '')}`)
        let json = await image.json()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async fortnite(nick) {
        if (!nick) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A Fortnite User\x1b[0m")
        let image = await fetch(`https://api.notzerotwo.ml/data/fortnite?api=${this.token}&nickname=${JSON.stringify(nick.nick).replace(/['"]+/g, '')}`)
        let json = await image.json()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async animesearch(image) {
        if (!image) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A Image\x1b[0m")
        let image1 = await fetch(`https://api.notzerotwo.ml/data/animesearch?api=${this.token}&image=${JSON.stringify(image.image).replace(/['"]+/g, '')}`)
        let json = await image1.json()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async cryptoalert() {
        let image = await fetch(`https://api.notzerotwo.ml/data/cryptoalert?api=${this.token}`)
        let json = await image.json()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async lyrics(title) {
        if (!title) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A title\x1b[0m")
        let image = await fetch(`https://api.notzerotwo.ml/data/lyrics?api=${this.token}&title=${JSON.stringify(title.title).replace(/['"]+/g, '')}`)
        let json = await image.json()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async axoltl() {
        let image = await fetch(`https://api.notzerotwo.ml/data/axoltl?api=${this.token}`)
        let json = await image.json()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async dictionary(word, language) {
        if(!word) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A Word\x1b[0m")
        let image = await fetch(`https://api.notzerotwo.ml/data/dictionary?api=${this.token}&word=${JSON.stringify(word.word).replace(/['"]+/g, '')}&language=${JSON.stringify(word.language || "en").replace(/['"]+/g, '')}`)
        let json = await image.json()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    // Finish data section starting fun section
    async _8ball(question) {
        if (!question) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A Question to ask\x1b[0m")
        let image = await fetch(`https://api.notzerotwo.ml/fun/8ball?api=${this.token}&quest=${JSON.stringify(question.question).replace(/['"]+/g, '')}`)
        let json = await image.json()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async advice() {
        let image = await fetch(`https://api.notzerotwo.ml/fun/advice?api=${this.token}`)
        let json = await image.json()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async catfact() {
        let image = await fetch(`https://api.notzerotwo.ml/fun/catfact?api=${this.token}`)
        let json = await image.json()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async chatbot(message) {
        if (!message) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A Message\x1b[0m")
        let image = await fetch(`https://api.notzerotwo.ml/fun/chatbot?api=${this.token}&message=${JSON.stringify(message.message).replace(/['"]+/g, '')}`)
        let json = await image.json()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async waifuchat(message, situation, uuid) {
        if (!message) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A Message\x1b[0m")
        let image = await fetch(`https://api.notzerotwo.ml/fun/chatbot?api=${this.token}&message=${JSON.stringify(message.message).replace(/['"]+/g, '')}&situation=${JSON.stringify(message.situation || "Zero-Chan is very attractive girlfriend. Zero-Chan loves User.").replace(/['"]+/g, '') }&uuid=${JSON.stringify(message.uuid || "642642727237845041").replace(/['"]+/g, '')}`)
        let json = await image.json()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async dadjoke() {
        let image = await fetch(`https://api.notzerotwo.ml/fun/dadjoke?api=${this.token}`)
        let json = await image.json()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async fact() {
        let image = await fetch(`https://api.notzerotwo.ml/fun/fact?api=${this.token}`)
        let json = await image.json()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async meme() {
        let image = await fetch(`https://api.notzerotwo.ml/fun/meme?api=${this.token}`)
        let json = await image.json()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async texttoimage(imagine) {
        if (!imagine) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A Imagine text\x1b[0m")
        let image = await fetch(`https://api.notzerotwo.ml/fun/texttoimage?api=${this.token}&imagine=${JSON.stringify(imagine.imagine).replace(/['"]+/g, '')}`)
        let json = await image.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async wouldyourather() {
        let image = await fetch(`https://api.notzerotwo.ml/fun/wouldyourather?api=${this.token}`)
        let json = await image.json()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async randomemoji() {
        let image = await fetch(`https://api.notzerotwo.ml/fun/randomemoji?api=${this.token}`)
        let json = await image.json()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async isthatfor() {
        let image = await fetch(`https://api.notzerotwo.ml/fun/isthatfor?api=${this.token}`)
        let json = await image.json()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    // Finish fun section starting image section

    //
    async achievement(text, title = text.title) {
        if (!text) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A Text\x1b[0m")
        //see if titile is specified else do the same thing without title
        if (!title) {
            let image = await fetch(`https://api.notzerotwo.ml/image/achievement?api=${this.token}&text=${JSON.stringify(text.text).replace(/['"]+/g, '')}`)
            let json = await image.buffer()

            if (json.error) {
                throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
            }

            return json
        } else if(title) {
            let image = await fetch(`https://api.notzerotwo.ml/image/achievement?api=${this.token}&text=${JSON.stringify(text.text).replace(/['"]+/g, '')}&title=${JSON.stringify(text.title).replace(/['"]+/g, '')}`)
            let json = await image.buffer()

            if (json.error) {
                throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
            }

            return json
        }
    }
    async alert(text) {
        if (!text) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A Text\x1b[0m")
        let image = await fetch(`https://api.notzerotwo.ml/image/alert?api=${this.token}&message=${JSON.stringify(text.text).replace(/['"]+/g, '')}`)
        let json = await image.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async beautiful(image) {
        if (!image) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A Image\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/beautiful?api=${this.token}&image=${JSON.stringify(image.image).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async bobross(image) {
        if (!image) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A Image\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/bobross?api=${this.token}&image=${JSON.stringify(image.image).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async busted(image) {
        if (!image) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A Image\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/busted?api=${this.token}&image=${JSON.stringify(image.image).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async changemymind(text) {
        if (!text) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A Text\x1b[0m")
        let image = await fetch(`https://api.notzerotwo.ml/image/changemymind?api=${this.token}&text=${JSON.stringify(text.text).replace(/['"]+/g, '')}`)
        let json = await image.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async delete(image) {
        if (!image) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A Image\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/delete?api=${this.token}&image=${JSON.stringify(image.image).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async drake(text, text1) {
        if (!text) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A text\x1b[0m")
        if (!text.text1) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A text\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/drake?api=${this.token}&text1=${JSON.stringify(text.text).replace(/['"]+/g, '')}&text2=${JSON.stringify(text.text1).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async fearman(image) {
        if (!image) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A Image\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/fear-man?api=${this.token}&image=${JSON.stringify(image.image).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async gay(image) {
        if (!image) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A Image\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/gay?api=${this.token}&image=${JSON.stringify(image.image).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async invert(image) {
        if (!image) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A Image\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/invert?api=${this.token}&image=${JSON.stringify(image.image).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async jokeoverhead(image) {
        if (!image) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A Image\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/jokeoverhead?api=${this.token}&image=${JSON.stringify(image.image).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async lisapresentation(text) {
        if (!text) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A Text\x1b[0m")
        let image = await fetch(`https://api.notzerotwo.ml/image/lisapresentation?api=${this.token}&text=${JSON.stringify(text.text).replace(/['"]+/g, '')}`)
        let json = await image.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async panikkalm(text, text1, text2) {
        if (!text) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A text\x1b[0m")
        if (!text.text1) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A text\x1b[0m")
        if (!text.text2) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A text\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/panik-kalm?api=${this.token}&panik1=${JSON.stringify(text.text).replace(/['"]+/g, '')}&kalm=${JSON.stringify(text.text1).replace(/['"]+/g, '')}&panik2=${JSON.stringify(text.text2).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async pixelize(image) {
        if (!image) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A Image\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/pixelize?api=${this.token}&image=${JSON.stringify(image.image).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async simp(image) {
        if (!image) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A Image\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/simp?api=${this.token}&image=${JSON.stringify(image.image).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async spongebobburn(text) {
        if (!text) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A Text\x1b[0m")
        let image = await fetch(`https://api.notzerotwo.ml/image/spongebob-burn?api=${this.token}&text=${JSON.stringify(text.text).replace(/['"]+/g, '')}`)
        let json = await image.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async spotify(image, title, artist, name) {
        if (!image) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A text\x1b[0m")
        if (!image.title) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A title\x1b[0m")
        if (!image.artist) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A artist\x1b[0m")
        if (!image.name) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A artist\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/spotify?api=${this.token}&image=${JSON.stringify(image.image).replace(/['"]+/g, '')}&title=${JSON.stringify(image.title).replace(/['"]+/g, '')}&artist=${JSON.stringify(image.artist).replace(/['"]+/g, '')}&name=${JSON.stringify(image.name).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async thisguy(image) {
        if (!image) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A Image\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/this-guy?api=${this.token}&image=${JSON.stringify(image.image).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    //Sistemare la gif
    async triggered(image) {
        if (!image) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A Image\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/triggered?api=${this.token}&image=${JSON.stringify(image.image).replace(/['"]+/g, '')}`)
        //buffer a gif from the url
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async tuxedopooh(text, text1) {
        if (!text) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A text\x1b[0m")
        if (!text.text1) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A text\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/tuxedo-pooh?api=${this.token}&text1=${JSON.stringify(text.text).replace(/['"]+/g, '')}&text2=${JSON.stringify(text.text1).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async tweet(image, username, text) {
        if (!image) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A text\x1b[0m")
        if (!image.username) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A Username\x1b[0m")
        if (!image.text) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A text\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/tweet?api=${this.token}&image=${JSON.stringify(image.image).replace(/['"]+/g, '')}&username=${JSON.stringify(image.username).replace(/['"]+/g, '')}&text=${JSON.stringify(image.text).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async icanmilkyou(avatar, avatar1) {
        if (!avatar) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A text\x1b[0m")
        if (!avatar.avatar1) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A text\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/icanmilkyou?api=${this.token}&avatar1=${JSON.stringify(avatar.avatar).replace(/['"]+/g, '')}&avatar2=${JSON.stringify(avatar.text1).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async npc(text, text1) {
        if (!text) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A text\x1b[0m")
        if (!text.text1) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A text\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/npc?api=${this.token}&text1=${JSON.stringify(text.text).replace(/['"]+/g, '')}&text2=${JSON.stringify(text.text1).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async heaven(avatar) {
        if (!avatar) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A avatar\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/heaven?api=${this.token}&avatar=${JSON.stringify(avatar.avatar).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async drip(avatar) {
        if (!avatar) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A avatar\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/drip?api=${this.token}&avatar=${JSON.stringify(avatar.avatar).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async dockoftheshame(avatar) {
        if (!avatar) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A avatar\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/dockoftheshame?api=${this.token}&avatar=${JSON.stringify(avatar.avatar).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async simpcard(avatar) {
        if (!avatar) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A avatar\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/simpcard?api=${this.token}&avatar=${JSON.stringify(avatar.avatar).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async shot(avatar) {
        if (!avatar) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A avatar\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/shot?api=${this.token}&avatar=${JSON.stringify(avatar.avatar).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async adios(avatar) {
        if (!avatar) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A avatar\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/adios?api=${this.token}&avatar=${JSON.stringify(avatar.avatar).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async avatar(text) {
        if (!text) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A text\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/avatar?api=${this.token}&name=${JSON.stringify(text.text).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async httpcat(protocol) {
        if (!protocol) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A protocol\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/httpcat?api=${this.token}&portocol=${JSON.stringify(protocol.protocol).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async robot(text) {
        if (!text) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A text\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/robot?api=${this.token}&name=${JSON.stringify(text.text).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async avatar(text) {
        if (!text) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A text\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/avatar?api=${this.token}&name=${JSON.stringify(text.text).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async welcomecard(avatar, guildname, name, discriminator, counter) {
        if (!avatar) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A avatar\x1b[0m")
        if (!avatar.guildname) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A GuildName\x1b[0m")
        if (!avatar.name) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A name\x1b[0m")
        if (!avatar.discriminator) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A discriminator\x1b[0m")
        if (!avatar.counter) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A counter\x1b[0m")    
        let image2 = await fetch(`https://api.notzerotwo.ml/image/welcomecard?api=${this.token}&avatar=${JSON.stringify(avatar.avatar).replace(/['"]+/g, '')}&guildname=${JSON.stringify(avatar.guildname).replace(/['"]+/g, '')}&name=${JSON.stringify(avatar.name).replace(/['"]+/g, '')}&discriminator=${JSON.stringify(avatar.discriminator).replace(/['"]+/g, '')}&counter=${JSON.stringify(avatar.counter).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async listening(image) {
        if (!image) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A image\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/listening?api=${this.token}&image=${JSON.stringify(image.image).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async mickeymouse(text) {
        if (!text) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A text\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/mickeymouse?api=${this.token}&text=${JSON.stringify(text.text).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async waifugenerator() {
        let image2 = await fetch(`https://api.notzerotwo.ml/image/waifugenerator?api=${this.token}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async pleasestop(text) {
        if (!text) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A text\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/pleasestop?api=${this.token}&text=${JSON.stringify(text.text).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async gifsearch(text) {
        if (!text) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A text\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/gifsearch?api=${this.token}&search=${JSON.stringify(text.text).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async boycry(text) {
        if (!text) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A text\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/boycry?api=${this.token}&text=${JSON.stringify(text.text).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async crymusic(text) {
        if (!text) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A text\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/crymusic?api=${this.token}&text=${JSON.stringify(text.text).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async pain(text) {
        if (!text) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A text\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/pain?api=${this.token}&text=${JSON.stringify(text.text).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async holdup(text) {
        if (!text) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A text\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/holdup?api=${this.token}&text=${JSON.stringify(text.text).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async iwon(text) {
        if (!text) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A text\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/iwon?api=${this.token}&text=${JSON.stringify(text.text).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async magik(image, intensity = image.intensity) {
        if (!intensity) {
            if(!image) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A image\x1b[0m")
            let image1 = await fetch(`https://api.notzerotwo.ml/image/magik?api=${this.token}&image=${JSON.stringify(image.image).replace(/['"]+/g, '')}`)
            let json = await image1.buffer()

            if (json.error) {
                throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
            }

            return json
        } else if (intensity) {
            if(!image) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A image\x1b[0m")
            let image1 = await fetch(`https://api.notzerotwo.ml/image/magik?api=${this.token}&image=${JSON.stringify(image.image).replace(/['"]+/g, '')}&intensity=${JSON.stringify(image.intensity).replace(/['"]+/g, '')}`)
            let json = await image1.buffer()

            if (json.error) {
                throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
            }

            return json
        }
    }
    async ping(image) {
        if (!image) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A image\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/ping?api=${this.token}&image=${JSON.stringify(image.image).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async soldiersociety(text1, text2) {
        if (!text1) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide text1\x1b[0m")
        if (!text1.text2) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide text2\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/soldiersociety?api=${this.token}&text=${JSON.stringify(text1.text1).replace(/['"]+/g, '')}&text1=${JSON.stringify(text1.text2).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async rankcard(name, discriminator, currentXP, fullXP, level, rank, avatar) {
        if (!name) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide a name\x1b[0m")
        if (!name.discriminator) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide discriminator\x1b[0m")
        if (!name.currentXP) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide CurrentXP\x1b[0m")
        if(!name.fullXP) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide FullXP\x1b[0m")
        if(!name.level) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide Level\x1b[0m")
        if(!name.rank) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide Rank\x1b[0m")
        if(!name.avatar) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide Avatar\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/rankcard?api=${this.token}&name=${JSON.stringify(name.name).replace(/['"]+/g, '')}&discriminator=${JSON.stringify(name.discriminator).replace(/['"]+/g, '')}&currentXP=${JSON.stringify(name.currentXP).replace(/['"]+/g, '')}&fullXP=${JSON.stringify(name.fullXP).replace(/['"]+/g, '')}&level=${JSON.stringify(name.level).replace(/['"]+/g, '')}&rank=${JSON.stringify(name.rank).replace(/['"]+/g, '')}&avatar=${JSON.stringify(name.avatar).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async gigachad(image, type) {
        const check = ["normal", "god"]
        if (!image) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide a image\x1b[0m")
        if (!image.type) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide a type between [normal, god]\x1b[0m")

        //controlla se quello scritto e contenuto nell array
        if (!check.includes(image.type)) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide a type between [normal, god]\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/gigachad?api=${this.token}&image=${JSON.stringify(image.image).replace(/['"]+/g, '')}&type=${JSON.stringify(image.type).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async leavecard(avatar, guildname, name, discriminator, counter) {
        if (!avatar) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A avatar\x1b[0m")
        if (!avatar.guildname) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A GuildName\x1b[0m")
        if (!avatar.name) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A name\x1b[0m")
        if (!avatar.discriminator) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A discriminator\x1b[0m")
        if (!avatar.counter) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A counter\x1b[0m")    
        let image2 = await fetch(`https://api.notzerotwo.ml/image/leavecard?api=${this.token}&avatar=${JSON.stringify(avatar.avatar).replace(/['"]+/g, '')}&guildname=${JSON.stringify(avatar.guildname).replace(/['"]+/g, '')}&name=${JSON.stringify(avatar.name).replace(/['"]+/g, '')}&discriminator=${JSON.stringify(avatar.discriminator).replace(/['"]+/g, '')}&counter=${JSON.stringify(avatar.counter).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async girlandboytalk(text, text1) {
        if (!text) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A text\x1b[0m")
        if (!text.text1) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A text1\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/girlandboytalk?api=${this.token}&text=${JSON.stringify(text.text).replace(/['"]+/g, '')}&text1=${JSON.stringify(text.text1).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async whathow(image) {
        if (!image) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A image\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/image/whathow?api=${this.token}&image=${JSON.stringify(image.image).replace(/['"]+/g, '')}`)
        let json = await image2.buffer()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    // image section finished security section
    async cve(cve) {
        if (!cve) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A cve\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/security/cve?api=${this.token}&cve=${JSON.stringify(cve.cve).replace(/['"]+/g, '')}`)
        let json = await image2.json()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async dangeroususer(id) {
        if (!id) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A ID\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/security/dangerous?api=${this.token}&user=${JSON.stringify(id.id).replace(/['"]+/g, '')}`)
        let json = await image2.json()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async domain(domain) {
        if (!domain) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A Domain\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/security/domain?api=${this.token}&domain=${JSON.stringify(domain.domain).replace(/['"]+/g, '')}`)
        let json = await image2.json()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async stackoverflow(error) {
        if (!error) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide An Error\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/security/stackoverflow?api=${this.token}&error=${JSON.stringify(error.error).replace(/['"]+/g, '')}`)
        let json = await image2.json()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    //text section
    async compiler(code, language) {
        if (!code) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A Code\x1b[0m")
        if (!code.language) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A Code Language\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/text/compile?api=${this.token}&language=${JSON.stringify(code.language).replace(/['"]+/g, '')}&code=${code.code}`)
        let json = await image2.json()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async decodebinary(text) {
        if (!text) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide An Text\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/text/decode-binary?api=${this.token}&binary=${JSON.stringify(text.text).replace(/['"]+/g, '')}`)
        let json = await image2.json()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async emojify(text) {
        if (!text) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide An Text\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/text/emojify?api=${this.token}&text=${JSON.stringify(text.text).replace(/['"]+/g, '')}`)
        let json = await image2.json()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async encodebinary(text) {
        if (!text) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide An Text\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/text/encode-binary?api=${this.token}&text=${JSON.stringify(text.text).replace(/['"]+/g, '')}`)
        let json = await image2.json()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async question(text) {
        if (!text) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A Text\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/text/question?api=${this.token}&question=${JSON.stringify(text.text).replace(/['"]+/g, '')}`)
        let json = await image2.json()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async translate(text, from, to) {
        if (!text) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A Text\x1b[0m")
        if (!text.from) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A From\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/text/translate?api=${this.token}&msg=${JSON.stringify(text.text).replace(/['"]+/g, '')}&to=${JSON.stringify(text.to).replace(/['"]+/g, '')}&from=${JSON.stringify(text.from).replace(/['"]+/g, '')}&from=${JSON.stringify(text.from).replace(/['"]+/g, '')}`)
        let json = await image2.json()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async zalgo(text) {
        if (!text) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A Text\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/text/zalgo?api=${this.token}&text=${JSON.stringify(text.text).replace(/['"]+/g, '')}`)
        let json = await image2.json()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async story() {
        let image2 = await fetch(`https://api.notzerotwo.ml/text/story?api=${this.token}`)
        let json = await image2.json()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async uselessfacts() {
        let image2 = await fetch(`https://api.notzerotwo.ml/text/uselessfacts?api=${this.token}`)
        let json = await image2.json()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async meals() {
        let image2 = await fetch(`https://api.notzerotwo.ml/text/meals?api=${this.token}`)
        let json = await image2.json()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    async morse(text) {
        if (!text) return new TypeError("\x1b[31m[ZeroApi Wrapper] Error: Provide A Text\x1b[0m")
        let image2 = await fetch(`https://api.notzerotwo.ml/text/morse?api=${this.token}&text=${JSON.stringify(text.text).replace(/['"]+/g, '')}`)
        let json = await image2.json()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
    //Sport Section
    async socceroredictor() {
        let image2 = await fetch(`https://api.notzerotwo.ml/sports/socceroredictor?api=${this.token}`)
        let json = await image2.json()

        if (json.error) {
            throw new TypeError(`\x1b[31m[ZeroApi Wrapper] Error: ${json.error}\x1b[0m`)
        }

        return json
    }
}
module.exports = AuthClient;
const zeroapi = require("zeroapi-wrapper");

const apiclient = new zeroapi({ token: "policiata" });

apiclient.socceroredictor().then(data => { console.log(data); });
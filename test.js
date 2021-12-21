const zeroapi = require("zeroapi-wrapper");

const apiclient = new zeroapi({ token: "ApiKey" });

apiclient.socceroredictor().then(data => { console.log(data); });

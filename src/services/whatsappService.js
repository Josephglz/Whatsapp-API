const https = require('https');


function sendMessageWhatsApp(data) {
    const options = {
        host: "graph.facebook.com",
        path: "/v15.0/102694309359281/messages",
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer EAAG539o8zfMBAEQ4YnsZApN19NiKLw5VnKQrmiTT0w5ZB7aNNRNURZC2BgBUvypWpgNZAYWOZBtlROqVswTmIAb6gHV5boTXfIZCVCrAZCVmuizpNHdOazAh9nfL7po2wuEeTGCOZCPI3Hl7v5sCaUHlpGnX1EqIxwxWZCIZBYkGJPZAWLSLhX5GfZAf'
        }
    }

    const req = https.request(options, res => {
        res.on('data', d => {
            process.stdout.write(d)
        })
    });

    req.on('error', error => {
        console.error(error)
    });

    req.write(data);
    req.end();
}

module.exports = {
    sendMessageWhatsApp
}

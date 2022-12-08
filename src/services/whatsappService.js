const https = require('https');

function sendMessageWhatsApp(textResponse, phoneNumber) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",    
        "recipient_type": "individual",
        "to": phoneNumber,
        "type": "text",
        "text": {
            "preview_url": false,
            "body": textResponse
        }
    })

    const options = {
        host: "graph.facebook.com",
        path: "/v15.0/102694309359281/messages",
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: process.env.bearerKey
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

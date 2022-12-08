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
            Authorization: "Bearer EAAG539o8zfMBACp6ZAFoschlyzHo22ZAOe3nzeuT8vfteCzZAXA2qUGhvsfaJwmqBgmsaZCPRFSy0E9qLAtfpZBHwZBZBAMBJiTAo7rB3YdsE3lcYlmoXumSdEfK209SsvmvPZAnZBy48HxEkUXh4wMY5Jtqc8ZBwsD0QYmoZBcrXpXOhIW0tHCsTRzHZBeidB8CrGEQ6C2SGTbcowZDZD"
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

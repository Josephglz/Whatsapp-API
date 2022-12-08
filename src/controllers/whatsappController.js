const fs = require('fs');
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));

const verifyToken = (req, res) => {
    
    try{
        var accessToken = "RTQWWTVHBDEJHJKIKIKNDS9090DS";
        var token = req.query["hub.verify_token"];
        var challenge = req.query["hub.challenge"];

        if(challenge != null && token != null && token == accessToken){
            res.send(challenge);
        }else{
            res.status(400).send();
        }

    }catch(e){
        console.log(e)
        res.status(400).send();
    }
}

const ReceivedMessage = (req, res) => {
    try {
        var entry = (req.body["entry"])[0];
        var changes = (entry["changes"])[0];
        var value = changes["value"];
        var messageObject = value["messages"];
        if(typeof messageObject != "undefined") {
            var message = messageObject[0];
            var text = getTextUser(message);
            myConsole.log(messageObject);
    
            console.log(text)
        }
        res.send("EVENT_RECEIVED");
    } catch (e) {
        console.log(e);
        res.send("EVENT_RECEIVED");
    }
}

function getTextUser(message) {
    var text = "";
    var typeMessage = message["type"];
    if(typeMessage == "text") {
        text = (message["text"])["body"];
    } else if(typeMessage == "interactive") {
        var interactiveObject = message["interactive"];
        var interactiveType = interactiveObject["type"];

        if(interactiveType == "button_reply") {
            text = (interactiveObject["button_reply"])["title"];
        } else if (interactiveType == "list_reply"){
            text = (interactiveObject["list_reply"])["title"];
        }
    }
    return text;
}

module.exports = {
    verifyToken,
    ReceivedMessage
}
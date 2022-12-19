const wppModels = require('./WhatsappModels')
const wppServices = require('../services/whatsappService')
const fs = require('fs')
const { text } = require('express')
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"))

var clients = []

function Process(textUser, phoneNumber) {
    textUser = textUser.toLowerCase()
    var models = [];

    var client = clients.find(element => element.phoneNumber == phoneNumber) ? clients.findIndex(element => element.phoneNumber == phoneNumber) : clients.push(generateNewClient(phoneNumber))
    client = clients.findIndex(element => element.phoneNumber == phoneNumber)

    if(textUser.includes("hola") || 
        textUser.includes("buenas") || 
        textUser.includes("buenos") ||
        textUser.includes("buen dia") || 
        textUser.includes("buen día") || 
        textUser.includes("buenas tardes") || 
        textUser.includes("buenas noches") ||
        textUser.includes("info") ||
        textUser.includes("información") ||
        textUser.includes("informacion") ||
        textUser.includes("ayuda") ||
        textUser.includes("informes") ||
        textUser.includes("informe")) {
            var model = wppModels.models.principalMenu(phoneNumber)
            models.push(model)
            clients[client].process = 1
            clients[client].step = 1
    } else if(textUser.includes("gracias") || 
            textUser.includes("adios") ||
            textUser.includes("adiós")) {
                var model = wppModels.models.messageText("\nNos vemos pronto! 👋\n", phoneNumber)
                models.push(model)
                clients[client].process = 0
                clients[client].step = 0
    } else if(textUser.includes("📄 Información")  && clients[client].process == 1) {
        clients[client].process = 2
        clients[client].step = 1
    } else {
        var model = wppModels.models.messageText("\nPor favor, espere un momento...\n\n En breve será atendido por un asistente ☎️\n", phoneNumber)
        models.push(model)
        clients[client].process = 0
        clients[client].step = 0
    }
    
    models.forEach(element => {
        wppServices.sendMessageWhatsApp(element)
    })
}


function generateNewClient(phoneNumber) {
    var cliente = {
        "phoneNumber": phoneNumber,
        "process": 0,
        "step": 0,
    }
    return cliente
}

module.exports = {
    Process
}
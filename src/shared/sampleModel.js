function infoContacto(phoneNumber) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": phoneNumber,
        "type": "text",
        "text": {
            "preview_url": false,
            "body": " ℹ️ *Información de Contacto* \n\n📞 *Teléfono:* +52 1 833 151 4894\n💻 *Facebook:* ViajesPrueba \n\n\n_Para regresar al menú escriba:_ ```Menu```\n\n"
        }
    })
    return data
}

function mensajeTexto(message, phoneNumber) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": phoneNumber,
        "type": "text",
        "text": {
            "preview_url": false,
            "body": message
        }
    })
    return data
}

function sampleImage(phoneNumber) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": phoneNumber,
        "type": "image",
        "image": {
            "preview_url": false,
            "url": "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        }
    })
    return data
}

function sampleButtons(phoneNumber) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": phoneNumber,
        "type": "interactive",
        "interactive": {
            "type": "button",
            "body": {
                "text": "🚗 Gracias por ponerte en contacto!\n\n¿En qué te puedo ayudar? 👀",
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "1",
                            "title": "📄 Información",
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "2",
                            "title": "📝 Reservar",
                        }
                    }
                ],
            }
        }
    })
    return data
}

function sampleList(phoneNumber) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": phoneNumber,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "body": {
                "text": "🕛 Lista de horarios de salida 🕛",
            },
            "footer": {
                "text": "Porfavor, seleccione una de las opciones acontinuación",
            },
            "action": {
                "button": "Ver salidas",
                "sections": [
                    {
                        "title": "🌉 Tampico - Monterrey 🏔️",
                        "rows": [
                            {
                                "id": "salida-T_M-001",
                                "title": "🕒 7:00 AM",
                                "description": "Salida de Tampico a Monterrey por la mañana"
                            },
                            {
                                "id": "salida-T_M-002",
                                "title": "🕒 3:00 PM",
                                "description": "Salida de Tampico a Monterrey por la tarde"
                            }
                        ]
                    },
                    {
                        "title": "🏔️ Monterrey - Tampico 🌉",
                        "rows": [
                            {
                                "id": "salida-M_T-001",
                                "title": "🕒 7:00 AM",
                                "description": "Salida de Monterrey a Tampico por la mañana"
                            },
                            {
                                "id": "salida-M_T-002",
                                "title": "🕒 3:00 PM",
                                "description": "Salida de Monterrey a Tampico por la noche"
                            }
                        ]
                    }
                ]
            }
        }
    })
    return data
}

module.exports = {
    infoContacto,
    mensajeTexto,
    sampleImage,
    sampleButtons,
    sampleList
}
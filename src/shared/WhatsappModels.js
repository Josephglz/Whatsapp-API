
const models = {
    messageText: (message, phoneNumber) => {
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
    },
    principalMenu: (phoneNumber) => {
        const data = JSON.stringify({
            "messaging_product": "whatsapp",
            "to": phoneNumber,
            "type": "interactive",
            "interactive": {
                "type": "button",
                "body": {
                    "text": "\n*Gracias por ponerte en contacto* 🚗\n\nSoy un asistente virtual 🤖\n\n¿En qué te puedo ayudar? 👀\n",
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
    },
    reservationMenu: (phoneNumber) => {
        const data = JSON.stringify({
            "messaging_product": "whatsapp",
            "to": phoneNumber,
            "type": "interactive",
            "interactive": {
                "type": "list",
                "body": {
                    "text": "🕛 *Lista de horarios de salida* 🕛",
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


}

module.exports = {
    models
}
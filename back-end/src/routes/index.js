const express = require('express')
const routes = express.Router()

const Correios = require('../controllers/Correios')
const Whatsapp = require('../controllers/WhatsappApi')

routes.get('/tracking/code', Correios.getOne)
routes.get('/tracking/codes', Correios.getMany)

//Whatsapp

routes.get('/whatsapp/send/text-message/', Whatsapp.sendMessage)
routes.get('/whatsapp/disconnect/', Whatsapp.Disconnect)
routes.get('/whatsapp/connect/', Whatsapp.Connect)
routes.get('/whatsapp/get_qrcode/', Whatsapp.getQrCode)

module.exports = routes

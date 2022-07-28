//Enrutador
const express = require('express')

const {vistaPrincipal, vistaTables, vistaNotifications} = require('../controllers/pageControllers')
const router = express.Router()

router.get('/',vistaPrincipal)
router.get('/tables',vistaTables)
router.get('/notifications',vistaNotifications)

module.exports = {routes: router}




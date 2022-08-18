//Enrutador
const express = require('express')

const {vistaPrincipal, vistaTables, vistaTendencia} = require('../controllers/pageControllers')
const router = express.Router()

router.get('/',vistaPrincipal)
router.get('/tables',vistaTables)
router.get('/tendencia',vistaTendencia)

module.exports = {routes: router}




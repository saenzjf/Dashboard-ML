const express = require('express')
const path = require('path')
const expressLayouts = require('express-ejs-layouts')

const app = express()

app.set('view engine', 'ejs')
app.use(expressLayouts)

//Unir rutas especificando public como carpeta de arc estaticos
app.use(express.static(path.join(__dirname,'public')))

//Uso del router
const router = require('./routes/router')
app.use(router.routes)

/*
app.get('/',(req, res)=>{
    res.send('Dashboard con node Js')
})*/

app.listen(3000, ()=> {
    console.log('Server up running in http://localhost:3000 ')
})
//Controlador de las paginas
//Manejar vistas y luego avisarle al enrutador

const vistaPrincipal = (req, res)=>{
    res.render('home')
}

const vistaTables = (req, res)=>{
    res.render('tables')
}

const vistaTendencia = (req, res)=>{
    res.render('tendencia')
}

module.exports = {
    vistaPrincipal,
    vistaTables,
    vistaTendencia
}
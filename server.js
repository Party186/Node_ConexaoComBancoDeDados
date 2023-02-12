const Sequelize = require("sequelize")
const sequelize = new Sequelize("test","root","180512",{
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log("Conectado")
}).catch(function(erro){
    console.log("Erro: "+erro)
})
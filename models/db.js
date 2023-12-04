const mysql = require("mysql")

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'epiuse'
})
db.connect((err)=>{
    if(err) throw err;
    console.log('Conexion establecida')
})
module.exports = db
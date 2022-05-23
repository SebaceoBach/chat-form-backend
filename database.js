var mysql = require('mysql')

var conexion = mysql.createConnection( {
    host: 'data-avimo.cgriqmyweq5c.us-east-2.rds.amazonaws.com',
    database: 'testing_ali_fullstack',
    user: 'testing',
    password: 'Pruebas%ALI%2020'
})

conexion.connect(function(error){
    if(error){
        throw error
    } else
        console.log('CONEXION EXITOSA')
})

conexion.end();
var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'admin',
    database: 'sample'
})

connection.connect(function(error){
    if(error){
        console.log('Error')
    }
    else{
        console.log('Connected')
    }
})

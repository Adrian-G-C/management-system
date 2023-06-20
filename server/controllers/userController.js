const mysql = require('mysql');

// View Users
exports.view = (req, res) => {
    pool.getConnection((err, connection) => {
    if(err) throw err; //not connected
    console.log('Connected as ID ' + connection.threadID);
    //User the connection
    connection.query('SELECT * FROM user WHERE status = "active"', (err, rows) => {
        // when done with the connection, releast it
        connection.release();
        if(!err) {
            res.render('home', { rows });
        } else {
          console.log(err)  
        }
        console.log('The data from user table \n', rows);
    }); 
});
}
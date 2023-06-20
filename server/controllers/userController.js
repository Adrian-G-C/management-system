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

// Find User by Search
exports.find = (req, res) => {
    let searchTerm = req.body.search;
    // User the connection
    connection.query('SELECT * FROM user WHERE first_name LIKE ? OR last_name LIKE ?', ['%' + searchTerm + '%', '%' + searchTerm + '%'], (err, rows) => {
      // When done with connection release it.
        connection.release();
        if (!err) {
        res.render('home', { rows });
      } else {
        console.log(err);
      }
      console.log('The data from user table: \n', rows);
    });
  }

  exports.form = (req, res) => {
    res.render('add-user');
  }

  // Add new user
  exports.create = (req, res) => {
    const { first_name, last_name, email, phone, comments } = req.body;
    let searchTerm = req.body.search;
  
    // User the connection
    connection.query('INSERT INTO user SET first_name = ?, last_name = ?, email = ?, phone = ?, comments = ?', [first_name, last_name, email, phone, comments], (err, rows) => {
      // When done with connection release it.
      connection.release();
        if (!err) {
        res.render('add-user', { alert: 'User added successfully.' });
      } else {
        console.log(err);
      }
      console.log('The data from user table: \n', rows);
    });
  }

  // Edit user
exports.edit = (req, res) => {
    // User the connection
    connection.query('SELECT * FROM user WHERE id = ?', [req.params.id], (err, rows) => {
      if (!err) {
        res.render('edit-user', { rows });
      } else {
        console.log(err);
      }
      console.log('The data from user table: \n', rows);
    });
  }
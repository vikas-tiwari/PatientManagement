var express = require('express');
var compression = require('compression');
var app = express();
var bodyParser = require('body-parser');
var mysql= require('mysql');
const path = require('path');

app.use(compression());

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname + '/dist/patient-management/index.html'));
//   });


var server = app.listen(process.env.PORT || 5000, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });


var con = mysql.createConnection({
    host: "db4free.net",
    database: "clouddb",
    user: "vikast",
    password: "admin123",
    port:3306
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
  });

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
  });

  // Generic error handler used by all endpoints.
  function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
  }  

app.get('/api/getAllPatients',function(req,res,next) {
    var sql = "select *,DATE_FORMAT(dob,'%d %M %Y') AS date from patient_home";
    con.query(sql, function (err, result) {
    if (err) {
        next(err);
    } else {
        res.send(JSON.stringify(result));
    }
    });
});

app.post('/api/patient', function (req, res, next) {
  con.query('INSERT INTO patient_home SET ?', req.body, 
      function (err, result) {
          if (err) {
              next(err);
          } else {
              res.send('User added to database with ID: ' + result);
          }
      }
  );
});

app.get('/api/getDonations',function(req,res, next) {
    var sql = "select *,  DATE_FORMAT(dod,'%d %M %Y') AS date from donations_details";
    con.query(sql, function (err, result) {
        if (err) {
            next(err);
        } else {
            res.send(JSON.stringify(result));
        }
    });
});

app.post('/api/insertDonation', function (req, res) {
    con.query('INSERT INTO donations_details SET ?', req.body, 
        function (err, result) {
            if (err) {
                next(err);
            } else {
                res.send('Donation data added to database with ID: ' + result);
            }
        }
    );
  });
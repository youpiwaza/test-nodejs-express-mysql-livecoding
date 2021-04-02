var express = require('express');
var router = express.Router();

const mysql = require('mysql');

const db = mysql.createConnection({
  host       : 'localhost'
  ,user      : 'root'
  ,password  : ''
  ,database  : 'classicmodels'
});

db.connect(function(err) {
  // On test la conenxion a la bdd
  if (err) throw err;
  console.log('Connecté à la base de données MySQL!');

  // On test une première requête bateau
  db.query('SELECT * FROM `products`', function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

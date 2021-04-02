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
    
    // Asynchrone: les trucs de la bdd on bien été récupérés
    console.log('ICI', result);

    // Je m'en sers pour faire l'affichage
    /* GET home page. */
    router.get('/', function(req, res, next) {
      res.render('index', { title: 'Test affichage depuis la bdd', lesDonneesQuiViennentDeLaBDD: result });
    });
  });
});

//// /!\ ATTENTION /!\
//  Nous sommes en asynchrone, les données ne seront pas dispo ici
// mais uniquement dans le callback, bizoux
// console.log('LA', result);

module.exports = router;

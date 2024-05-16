var express = require('express');
var router = express.Router();
var Contrato = require('../controllers/contrato');

router.get('/contratos/entidades/:nipc', function(req, res) {
  Contrato.getEntidadeNamefromNIPC(req.params.nipc)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

router.get('/contratos/entidades/:nipc/contratos', function(req, res) {
  Contrato.getContractsfromEntidade(req.params.nipc)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

router.get('/contratos/entidades/:nipc/total', function(req, res) {
  Contrato.getContractValuesofEntidade(req.params.nipc)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

router.get('/contratos/entidades', function(req, res) {
  Contrato.findEntidades()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

router.get('/contratos/tipos', function(req, res) {
  Contrato.findTipos()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

router.get('/contratos/', function(req, res) {
  //if entidade is in query string
  if(req.query.entidade){
    Contrato.findbyEntidade(req.query.entidade)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
  }
  //if tipo is in query string
  else if(req.query.tipo){
    Contrato.findbyTipo(req.query.tipo)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
  }
  else{
    Contrato.list()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
  }
});

router.get('/contratos/:id', function(req, res) {
  console.log("bbbbb" + req.params.entidade)
  Contrato.findById(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

router.post('/contratos', function(req, res) {
  Contrato.insert(req.body)
    .then(dados => res.status(201).jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

router.put('/contratos/:id', function(req, res) {
  Contrato.update(req.params.id, req.body)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

router.delete('/contratos/:id', function(req, res) {
  Contrato.remove(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

module.exports = router;

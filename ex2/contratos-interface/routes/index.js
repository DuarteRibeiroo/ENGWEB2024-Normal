var express = require('express');
var router = express.Router();
var axios = require('axios')


router.get('/', function(req, res, next) {
  var d = new Date().toISOString().substring(0, 16)
  axios.get('http://contratos-api:16000/contratos')
    .then(response => {
      res.render('index', { contracts: response.data, title: 'Lista de Contratos', HeaderStr: 'Lista de Contratos' + d });
    })
    .catch(function(erro){
        res.render('error', {error: erro, message: 'Erro!'})
    })
  
});
router.get('/:id', function(req, res, next) {
  var d = new Date().toISOString().substring(0, 16)
  axios.get('http://contratos-api:16000/contratos/' + req.params.id)
    .then(response => {
      res.render('contrato', { contract: response.data, title: 'Lista de Contratos', HeaderStr: 'Contrato' + req.params.id +' - ' + d });
    })
    .catch(function(erro){
        res.render('error', {error: erro, message: 'Erro!'})
    })
  
});

router.get('/entidades/:nipc', function(req, res, next) {
  var d = new Date().toISOString().substring(0, 16)
  //Get entidade name from NIPC
  axios.get('http://contratos-api:16000/contratos/entidades/' + req.params.nipc)
    .then(response => {
      //Get contracts from entidade
      axios.get('http://contratos-api:16000/contratos/entidades/' + req.params.nipc + '/contratos')
        .then(response2 => {
          //Get total value of contracts from entidade
          axios.get('http://contratos-api:16000/contratos/entidades/' + req.params.nipc + '/total')
            .then(response3 => {
              console.log("a" + response3.data.entidade_comunicante)
              res.render('entidade', { nipc: req.params.nipc,nomeentidade: response.data, contracts: response2.data, totalContratos: response3.data[0], title: 'Entidade', HeaderStr: response.data.entidade_comunicante+ ' - ' + d });
            })
            .catch(function(erro){
                res.render('error', {error: erro, message: 'Erro!'})
            })
        })
        .catch(function(erro){
            res.render('error', {error: erro, message: 'Erro!'})
        })
    })
    .catch(function(erro){
        res.render('error', {error: erro, message: 'Erro!'})
    })
  
});

module.exports = router;

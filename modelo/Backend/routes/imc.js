var express = require('express');
var imcLogic = require('../logic/imc');

var router = express.Router();

router.get('/', function(req, res) {
    res.send('hello from calculator');
})

/**
 * curl -X POST http://localhost:3000/imc/calculate \
     -H "Accept: application/json" \
     -H "Content-Type: application/json" \
     -d '{"height":1.88, "weight":87}'
 */
router.post('/calculate', function(req, res) {
  console.log('calculating imc...');
  const {height, weight} = req.body;
  var imc = imcLogic.calculateImc(height, weight);
  var imcDescription = imcLogic.translateImc(imc);

  res.json({
    height,
    weight,
    imc,
    imcDescription
  });
});

module.exports = router;

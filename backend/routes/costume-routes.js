'use strict';



const jsonParser = require('body-parser').json();
const express = require('express');
const Uniform = require(__dirname + '/../models/uniform');
const uniformRouter = module.exports = express.Router();



uniformRouter.post('/uniforms', jsonParser, (req, res, next) => {
  let newUniform = new Uniform(req.body);

  newUniform.save()
  .then(data => res.send(data))
  .catch(err => next({statusCode: 400, message: err, error: err}));
});


uniformRouter.get('/uniforms', (req, res, next) => {
  let cosObj = req.params || {};
  Uniform.find(cosObj)
  .then(uniform => res.send(uniform))
  .catch(err => next({statusCode: 500, error: err}));
});


uniformRouter.get('/uniform/:id', (req, res, next) => {
  Uniform.findOne({_id: req.params.id})
  .then(uniform => res.send(uniform))
  .catch(err => next({statusCode: 404, message: 'Not Found', error: err}));
});


uniformRouter.put('/uniform/:id', jsonParser, (req, res, next) => {
  if(Object.keys(req.body).length === 0 || !req.params.id)
  next({statusCode:400, message: 'Bad Request'});
}
delete req.body._id;
Uniform.findOneAndUpdate({_id: req.params.id}, req.body)
.then(() => res.send('uniform has been updated!'))
.catch(err => next({statusCode: 404, message: 'Bad Request', error: err}));
});


uniformRouter.delete('/uniform/:id', (req, res, next) => {
  Uniform.remove({_id: req.params.id})
  .then(() => res.send('uniform has been deleted'))
  .catch(err => next({statusCode: 500, error: err}));
});

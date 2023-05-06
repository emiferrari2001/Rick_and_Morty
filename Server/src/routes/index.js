const getCharById = require('../controllers/getCharById');
const login = require('../controllers/login');
const postUser = require('../controllers/postUser')
const postFav = require('../controllers/postFav');
const deleteFav = require('../controllers/deleteFav')

const router = require('express').Router();

console.log('llega a routes?');

router.get('/character/:id', (req, res) => {
   getCharById(req, res);
});

router.get('/login', login);

router.post('/login', postUser);

router.post('/fav', (req, res) => {
   postFav(req, res);
});

router.delete('/fav/:id', (req, res) => {
   deleteFav(req, res);
});

module.exports = router;
const { Router } = require('express');
const {getCharById} = require('../controllers/charactersController');
const { postFav, deleteFav, getFavs } = require('../controllers/favoriteController');


const mainRouter = Router();

mainRouter.get( "/character/:id", getCharById);

mainRouter.post("/fav", postFav);

mainRouter.delete("/fav/:id", deleteFav)

//esto lo tengo en el backend, pero no lo estoy usando en el front
mainRouter.get('/fav', getFavs)

module.exports = mainRouter;
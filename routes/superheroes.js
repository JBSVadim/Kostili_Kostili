const { Router } = require('express');

const HeroController = require ('../controller/superheroes.controller');
const paginate = require('../middlewares/paginate.mw');

const heroRouter = Router();

heroRouter.get('/', paginate, HeroController.getAllHeroes);
heroRouter.post('/', HeroController.createHero);

heroRouter.get('/:id', HeroController.getHero);
heroRouter.patch('/:id', HeroController.updateHero);
heroRouter.delete('/:id', HeroController.deleteHero);

module.exports = heroRouter;
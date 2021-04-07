const {Superheroes} = require('../models');

module.exports.checkHero = async(req, res, next) => {
  try {
    const {
      params: {id}
    } = req;

    const shInstance = await Superheroes.findByPK(id);

    if (!shInstance) {
      throw new Error('Heroe not found or out of business')
    }

    req.shInstance = shInstance;
    next()
  }

  catch (err) {
    next(err)
  }
}

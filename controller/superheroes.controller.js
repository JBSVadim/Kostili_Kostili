const createError = requer('http-errors');
const { Superheroes } = require('../models');

module.exports.createHero = async (req,res,next) => {
  try {
    const { body } = req;
    const createdHero = await Superheroes.create(body);

    if(!createdHero) {
      return next(createError(400))
    }

    res.status(201).send({
      data:createdHero,
    });
  }

  catch (err){
    next(err)
  }
}

module.exports.getAllHeroes = async(req,res,ext) => {
  try {
    const { pagination = { } } = req;
    const heroes = await Superheroes.findAll({ 
      attributes: {
        exclude: ['real_name'],
      },
      ...pagination,
    });

    if(!heroes.length) {
      return next(createError(404, 'Heroes not found'));
    }

    res.status(200).send({
      data: heroes,
    })
  }

  catch (err) {
    next(err)
  }
};

module.exports.getHero = async (req, res, next) => {
  try {
    const {
      params: {id},
    } = req;

    const hero = await Superheroes.findByPk(id, {
      attributes: { exclude: ['real_name']},
    });

    if(!hero) {
      const err = createError(404,'Hero not found or out of business')
      return next(err)
    }

    res.send(hero);
  }

  catch (err) {
    next(err)
  }
}

module.exports.updateHero = async(req,res,next) => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const [rowsCount, [updatedHero]] = await Superheroes.update(body, {
      where: {id},
      returning: true,
    });

    if(rowCount !== 1) {
      return next(createError(400, 'Hero cant be updated'))
    }
  }
  catch (err) {
    next(err)
  }
}

module.exports.deleteHero = async(req,res,next) => {
  try {
    const {
      params: {id}
    } = req;

    const rowsCount = await Superheroes.destroy({ where: {id}});

    if (rowsCount !== 1) {
      return next(createError(404, 'Hero not found'))
    }
    res.send({ data: result});
  }
  catch (err) {
    next(err)
  }
}
const { Router } = require('express');

const heroRouter = require('./superheroes')

const router = Router();
router.use('/heroes', heroRouter)

module.exports = router;
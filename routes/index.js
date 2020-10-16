const { Router } = require('express');
const userRouter = require('./user');
const companyRouter = require('./company');

const rootRouter = Router();

rootRouter.use('/users', userRouter);
rootRouter.use('/company', companyRouter);

module.exports = rootRouter;

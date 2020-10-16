const { Router } = require('express');
const userRouter = require('./user');
const companyRouter = require('./company');
const usersCompanyRelationsRouter = require('./usersCompanyRelations');

const rootRouter = Router();

rootRouter.use('/users', userRouter);
rootRouter.use('/company', companyRouter);
rootRouter.use('/usersCompanyRelations', usersCompanyRelationsRouter);

module.exports = rootRouter;

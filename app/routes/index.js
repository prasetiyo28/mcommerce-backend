const notFound = require('./v1/404').index;
const authRouter = require('./v1/auth');

module.exports = function (app) {
  app.use('/auth', authRouter);

  app.use(notFound);
};

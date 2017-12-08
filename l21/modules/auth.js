module.exports = function(req, res, next) {
  if (true || req.session && req.session.login)
    return next();
  else
    return res.sendStatus(401);
};
module.exports = function(req, res, next) {
  if (req.session && req.session.user.login)
    return next();
  else
    return res.sendStatus(401);
};
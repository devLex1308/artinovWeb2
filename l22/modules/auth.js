module.exports = function(req, res, next) {
  if (req.session && req.session.user.login/*&& req.session.user.isAdmin*/)
    return next();
  else
    return res.sendStatus(401);
};
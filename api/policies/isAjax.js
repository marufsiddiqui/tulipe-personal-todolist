/**
 * Allow any authenticated user.
 */
module.exports = function (req, res, ok) {

  // User is allowed, proceed to controller
  if (req.isAjax) {
    return ok();
  }

  // User is not allowed
  else {
    return res.send("You are not permitted to perform this action.", 403);
  }
};
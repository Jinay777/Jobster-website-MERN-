const { BadRequestError } = require("../errors");

const testUser = (req, res, next) => {
  if (req.user.testUser) {
    throw new BadRequestError("TESTUSER read only");
  }
  next();
};

module.exports = testUser;

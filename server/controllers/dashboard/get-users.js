const getUsers = require("../../database/queries/dashboard/getUsers");

const usersAll = async (req, res, next) => {
  try {
    const users = await getUsers();
    return res.json(users);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
    usersAll,
};

const { Users } = require('../models');

const createNewUser = async (displayName, email, password, image) => { 
    const newUser = await Users.create({ displayName, email, password, image });
    return newUser;
};

const searchByDisplayName = async (displayName) => {
    const searchDisplayName = await Users.findOne({ where: { displayName } });
    return searchDisplayName;
};

const getAllUsers = async () => {
  const allUsers = await Users.findAll();
  return allUsers;
};

const getUserById = async (id) => {
  const [getUser] = await Users.findAll({ where: { id } });
  if (!getUser) return false;
  return getUser;
};

module.exports = {
  createNewUser,
  searchByDisplayName,
  getAllUsers,
  getUserById,
};

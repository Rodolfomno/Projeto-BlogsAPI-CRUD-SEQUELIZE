const { Users } = require('../models');

const createNewUser = async (displayName, email, password, image) => { 
    const newUser = await Users.create({ displayName, email, password, image });
    return newUser;
};

const searchByDisplayName = async (displayName) => {
    const searchDisplayName = await Users.findOne({ where: { displayName } });
    return searchDisplayName;
};

module.exports = {
  createNewUser,
  searchByDisplayName,
};

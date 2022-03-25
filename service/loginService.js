const { Users } = require('../models');

const searchByEmail = async (email) => {
    const emailExists = await Users.findOne({ where: { email } });
    return emailExists;
};

module.exports = {
    searchByEmail,
};
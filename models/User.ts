const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('example', 'admin','admin',{
    host: 'localhost',
    dialect: 'postgres'
})
class User extends Model {}

User.init ({
    user_name: {
      type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.BOOLEAN,
    }

  }, {
    sequelize,
    modelName: 'Users'
  });

export default User;
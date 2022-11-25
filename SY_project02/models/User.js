const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        email: {
          type: Sequelize.STRING(50),
          allowNull: true,
        },
        name: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        nickname: {
          type: Sequelize.STRING(15),
          allowNull: false,
        },
        // provider: {
        //   type: Sequelize.STRING(10),
        //   allowNull: false,
        //   defaultValue: "local",
        // },
        snsId: {
          type: Sequelize.STRING(30),
          allowNull: true,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        telephone: {
          type: Sequelize.STRING(13),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: "User",
        tableName: "users",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.User.hasOne(db.Cart);
    db.User.hasMany(db.Order);
  }
};

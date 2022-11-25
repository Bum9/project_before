const Sequelize = require("sequelize");

module.exports = class CartItem extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        cartId: {
          type: Sequelize.DECIMAL(11, 0).UNSIGNED,
          allowNull: false,
        },
        productId: {
          type: Sequelize.DECIMAL(11, 0).UNSIGNED,
          allowNull: false,
        },
        quantity: {
          type: Sequelize.DECIMAL(11, 0).UNSIGNED,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: "CartItem",
        tableName: "cartItems",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    // db.CartItem.hasOne(db.Cart);
    // db.CartItem.belongsTo(db.Product);
  }
};

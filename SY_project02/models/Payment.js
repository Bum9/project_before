const Sequelize = require("sequelize");

module.exports = class Payment extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        orderId: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        amount: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        paymentId: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        paymentType: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        status: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: "Payment",
        tableName: "payments",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Payment.belongsTo(db.Order);
    db.Payment.belongsToMany(db.Order, {
      through: "Checkout",
    });
  }
};

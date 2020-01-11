module.exports = function(sequelize, DataTypes) {
    var Cart = sequelize.define("Cart", {
      // Giving the Author model a name of type STRING
      ItemId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          len: [1]
        },
        in_cart: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          validate: {
            len: [1]
          },
      },
    }, 

    });
  
    Cart.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Cart.belongsTo(models.User, {
        foreignKey: {
          allowNull: true
        }
      })
      
      Cart.belongsTo(models.Item, {
        foreignKey: {
          allowNull: true
        }, 
      });
    };
  
    return Cart;
  };
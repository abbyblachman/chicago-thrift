module.exports = function(sequelize, DataTypes) {
    var Item = sequelize.define("Item", {
      price: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      category: {
        type: DataTypes.STRING,
        allowNull: true,
        len: [1]
      }, 
      name: {
          type: DataTypes.STRING, 
          allowNull: true, 
          len: [1]
      }, 
      description: {
          type: DataTypes.TEXT, 
          allowNull: true, 
          len: [1]
      }, 
      img_url: {
          type: DataTypes.TEXT, 
          allowNull: true, 
      }, 
      in_cart: {
        type: DataTypes.BOOLEAN, 
        allowNull: true,
      }

    }, 
    { timestamps: false

    });
  
    Item.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Item.hasOne(models.Cart, {
        onDelete: "cascade"
      });
    };
  
    return Item;
  };
module.exports = function(sequelize, DataTypes) {
    var Item = sequelize.define("Item", {
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      }, 
      name: {
          type: DataTypes.STRING, 
          allowNull: false, 
          len: [1]
      }, 
      description: {
          type: DataTypes.TEXT, 
          allowNull: false, 
          len: [1]
      }, 
      img_url: {
          type: DataTypes.STRING, 
          allowNull: false, 
      }, 

    });
  
    Item.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Item.belongsTo(models.Seller, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Item;
  };
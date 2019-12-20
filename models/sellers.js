module.exports = function(sequelize, DataTypes) {
    var Seller = sequelize.define("Seller", {
      // Giving the Author model a name of type STRING
      name: DataTypes.STRING
    });
  
    Seller.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      Seller.hasMany(models.Item, {
        onDelete: "cascade"
      });
    };
  
    return Seller;
  };
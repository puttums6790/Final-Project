module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      Beach: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      Aquatic: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      SportsEquipment: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      HobbySupplies: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      Trails: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },

      Other: {
        type: DataTypes.INTEGER,
        allowNull: false,
        len: [1]
      }
    });
  
    Post.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Post.belongsTo(models.User, {foreignKey: 'userID'});
    };
  
    return Post;
  };


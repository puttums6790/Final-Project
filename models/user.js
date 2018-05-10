"use strict";
//Dependencies
//=============================================================
var bcrypt = require("bcrypt");
// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
//var sequelize = require("../config/connection.js");
var mongoose = require("mongoose");

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define("User", {
    UserID: DataTypes.STRING,
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
  }, {});

  /*
	var User = sequelize.define("User", {
    userID: {
			type: DataTypes.STRING,
			allowNull: false,
      notEmpty: {
        msg: 'A user ID is required'
      },
		FirstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'First name is required'
        }
      }
    },
    LastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Last name is required'
        }
      }
    },
			unique: {
        args: true,
        msg: 'Sorry, that username is taken.',
        fields: [sequelize.fn('lower', sequelize.col('username'))]
      },	
			validate: {
        max: {
          args: [15],
          msg: 'The username you entered is invalid or more than 15 characters.'
        }   
      }		
		},
		password: {
			type: DataTypes.STRING, 
			allowNull: false,
			validate: {
        min: {
          // may be overridden by bcrypt 
          args: [8],
          msg: 'Minimum 8 characters required in last name'
        }   
      }   		
		}
  });

  User.sync({force: true}).then(() => {
    // Table created
    return User.create({
      firstName: 'John',
      lastName: 'Hancock'
    });
  });

  */
  
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password)
  }
  
  User.associate = function(models) {
    User.hasMany(models.Post, 
      {foreignKey: 'userID', onDelete: 'cascade'});
  };
  return User;
};

/*

// =============================================================
// *** Create Comment Model
// =============================================================
var Comment = mongoose.model('Comment', newComment);

// =============================================================
// *** Export the Comment Model
// =============================================================
module.exports = Comment;

*/

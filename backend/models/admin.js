'use strict';
const { Model } = require('sequelize');
const { encrypt } = require('./../utils/encrypt');

module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Admin.init(
    {
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'data nama diperlukan',
          },
          notEmpty: {
            msg: 'field tidak boleh kosong',
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: 'email telah terdaftar',
        },
        validate: {
          notNull: {
            msg: 'data email diperlukan',
          },
          notEmpty: {
            msg: 'field tidak boleh kosong',
          },
          isEmail: {
            msg: 'format email tidak valid',
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'data nama diperlukan',
          },
          notEmpty: {
            msg: 'field tidak boleh kosong',
          },
          len: {
            args: [8, 10],
            msg: 'password harus terdiri dari 8 hingga 10 karakter',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'Admin',
      hooks: {
        beforeCreate: (admin, option) => {
          admin.password = encrypt(admin.password);
        },
      },
    }
  );
  return Admin;
};

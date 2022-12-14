'use strict';
const { Model } = require('sequelize');
const { encrypt } = require('../utils/encrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Keranjang_Makanan);
    }
  }
  User.init(
    {
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'memerlukan data nama',
          },
          notEmpty: {
            msg: 'data nama harus diisi',
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
            msg: 'memerlukan data email',
          },
          notEmpty: {
            msg: 'email harus diisi',
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
            msg: 'memerlukan data email',
          },
          notEmpty: {
            msg: 'password tidak boleh kosong',
          },
          len: {
            args: [8, 10],
            msg: 'password harus berisi 8 - 10 karakter',
          },
        },
      },
      tinggi_badan: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      berat_badan: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      umur: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      jenis_kelamin: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      aktivitas_fisik: DataTypes.STRING,
      foto_profil: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
      hooks: {
        beforeCreate: (user, option) => {
          user.password = encrypt(user.password);
        },
      },
    }
  );
  return User;
};

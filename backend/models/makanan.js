'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Makanan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Makanan.hasMany(models.Keranjang_Makanan);
    }
  }
  Makanan.init(
    {
      nama_makanan: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'memerlukan data nama_makanan',
          },
          notEmpty: {
            msg: 'nama makanan harus diisi',
          },
        },
      },
      kalori: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'memerlukan data kalori',
          },
          notEmpty: {
            msg: 'data kalori harus diisi',
          },
        },
      },
      protein: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'memerlukan data protein',
          },
          notEmpty: {
            msg: 'data protein harus diisi',
          },
        },
      },
      lemak: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'memerlukan data lemak',
          },
          notEmpty: {
            msg: 'data lemak harus diisi',
          },
        },
      },
      karbohidrat: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'memerlukan data karbohidrat',
          },
          notEmpty: {
            msg: 'data karbohidrat harus diisi',
          },
        },
      },
      image: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Makanan',
    }
  );
  return Makanan;
};

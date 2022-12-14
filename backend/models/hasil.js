'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hasil extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Hasil.belongsTo(models.Keranjang_Makanan);
    }
  }
  Hasil.init(
    {
      id_keranjang_makanan: DataTypes.INTEGER,
      total_kalori: DataTypes.FLOAT,
      total_protein: DataTypes.FLOAT,
      total_lemak: DataTypes.FLOAT,
      total_karbohidrat: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: 'Hasil',
    }
  );
  return Hasil;
};

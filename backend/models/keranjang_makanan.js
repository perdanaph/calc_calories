'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Keranjang_Makanan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Keranjang_Makanan.belongsTo(models.Makanan);
      Keranjang_Makanan.belongsTo(models.User);
      Keranjang_Makanan.hasMany(models.Hasil);
    }
  }
  Keranjang_Makanan.init(
    {
      jumlah_makanan: DataTypes.INTEGER,
      id_user: DataTypes.INTEGER,
      id_makanan: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Keranjang_Makanan',
    }
  );
  return Keranjang_Makanan;
};

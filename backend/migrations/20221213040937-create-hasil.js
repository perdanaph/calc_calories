'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Hasils', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_keranjang_makanan: {
        type: Sequelize.INTEGER,
      },
      total_kalori: {
        type: Sequelize.FLOAT,
      },
      total_protein: {
        type: Sequelize.FLOAT,
      },
      total_lemak: {
        type: Sequelize.FLOAT,
      },
      total_karbohidrat: {
        type: Sequelize.FLOAT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.addConstraint('Hasils', {
      fields: ['id_keranjang_makanan'],
      type: 'foreign key',
      name: 'keranjang_makanan_fk',
      references: {
        table: 'Keranjang_Makanans',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Hasils');
  },
};

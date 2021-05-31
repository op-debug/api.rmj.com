const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../../database/models");
class DetailPenjualanModel extends Model{}

DetailPenjualanModel.init(
  {
      detail_penjulaan: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
      },
      perusahaan_id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
      },
      outlet_id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
      },
      id_penjualan: {
          type: DataTypes.UUID,
          primaryKey: true,
      },
      pelanggan: {
          type: DataTypes.STRING,
          defaultValue: ''
      },
      nomor_transaksi: {
        type: DataTypes.STRING,
        defaultValue: ''
      },
      referensi: {
          type: DataTypes.STRING,
          defaultValue: ''
      },
      no_order: {
          type: DataTypes.STRING,
          defaultValue: ''
      },
      id_barang: {
          type: DataTypes.UUID,
          defaultValue: ''
      },
      satuan: {
          type: DataTypes.STRING,
          defaultValue: ''
      },
      qty: {
          type: DataTypes.INTEGER,
          defaultValue: 0
      },
      harga: {
          type: DataTypes.INTEGER,
          defaultValue: 0
      },
      diskon: {
          type: DataTypes.INTEGER,
          defaultValue: 0
      },
      ppn: {
          type: DataTypes.INTEGER,
          defaultValue: 0
      },
      biaya: {
          type: DataTypes.INTEGER,
          defaultValue: 0
      },
      tgldibuat: {
          type: DataTypes.DATEONLY                    
      },
      idpembuat: {
          type: DataTypes.STRING,
          defaultValue: ''
      },
      tgledit: {
          type: DataTypes.DATEONLY                    
      },
      idedit: {
          type: DataTypes.STRING
      }
  },
  {
    sequelize: sequelize,
    timestamps: false,
    tableName: 'detail_penjualan',
  }
);

module.exports = DetailPenjualanModel;
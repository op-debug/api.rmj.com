const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../../database/models");
class HeaderPenjualanModel extends Model{}

HeaderPenjualanModel.init(
  {
      id_penjulaan: {
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
      tanggal: {
          type: DataTypes.DATEONLY                    ,
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
    tableName: 'header_penjualan'
   }
);

module.exports = HeaderPenjualanModel;
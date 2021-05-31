const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../../../database/models");
class DetailPenjualanModel extends Model{}

DetailPenjualanModel.init(
  {
    detail_penjulaan_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    device_id: {
        type: DataTypes.STRING,
        defaultValue:'',
        primaryKey:true
    },
    perusahaan_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    cabang_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    id_penjualan: {
        type: DataTypes.UUID,
        primaryKey: true,
    },
    tanggal: {
        type: DataTypes.DATEONLY                    ,
    },
    tanggaljtp: {
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
    produk_id: {
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
    lainlain: {
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
    },
    rowversion: {
        type: DataTypes.INTEGER,
        defaultValue:0
    }
  },
  {
    sequelize: sequelize,
    timestamps: false,
    tableName: 'detail_penjualan',
  }
);

module.exports = DetailPenjualanModel;
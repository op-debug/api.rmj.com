const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../../../database/models");
class HeaderPenjualanModel extends Model{}

HeaderPenjualanModel.init(
  {
    id_penjulaan: {
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
    uang:{
        type: DataTypes.STRING,
        defaultValue:''
    },
    kurs:{
        type: DataTypes.INTEGER,
        defaultValue:0
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
    total:{
        type: DataTypes.INTEGER,
        defaultValue:0,
    },
    ppnpersen:{
        type: DataTypes.INTEGER,
        defaultValue:0,
    },
    ppnnilai:{
        type: DataTypes.INTEGER,
        defaultValue:0,
    },
    diskonnilai:{
        type: DataTypes.INTEGER,
        defaultValue:0,
    },
    diskonpersen:{
        type: DataTypes.INTEGER,
        defaultValue:0,
    },
    biaya:{
        type: DataTypes.INTEGER,
        defaultValue:0,
    },
    lainlain:{
        type: DataTypes.INTEGER,
        defaultValue:0,
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
    tableName: 'header_penjualan'
   }
);

module.exports = HeaderPenjualanModel;
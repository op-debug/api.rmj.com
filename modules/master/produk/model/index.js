const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../../../database/models");

class ProdukModel extends Model{}

ProdukModel.init(
  {
        produk_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        produk_nama:{
            type: DataTypes.STRING,
            defaultValue:'',
            primaryKey:true
        },
        produk_satuan: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        produk_kategori: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        produk_barcode: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        produk_brand: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        produk_gambar: {
            type: DataTypes.BLOB
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
        harga_beli:{
            type:DataTypes.INTEGER,
            defaultValue:0
        },
        harga_jual:{
            type:DataTypes.INTEGER,
            defaultValue:0
        },
        stok_ceer:{
            type:DataTypes.INTEGER,
            defaultValue:0
        },
        stok_debe:{
            type:DataTypes.INTEGER,
            defaultValue:0
        },
        stok_akhir:{
            type:DataTypes.INTEGER,
            defaultValue:0
        },
        minimal_stok:{
            type:DataTypes.INTEGER,
            defaultValue:0
        },
        maksimal_stok:{
            type:DataTypes.INTEGER,
            defaultValue:0
        },
        status: {
            type: DataTypes.BOOLEAN,
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
    tableName: 'produk'
  }
);

module.exports = ProdukModel;
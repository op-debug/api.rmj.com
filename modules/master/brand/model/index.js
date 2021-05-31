const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../../../database/models");

class BrandModel extends Model{}

BrandModel.init(
  {
    brand_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    device_id:{
        type: DataTypes.STRING,
        defaultValue:'',
        primaryKey:true
    },
    brand_kode: {
        type: DataTypes.STRING,
        defaultValue: ''
    },
    brand_nama: {
        type: DataTypes.STRING,
        defaultValue: ''
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
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0
    },
    tgldibuat: {
        type: DataTypes.DATEONLY                    
    },
    user_idpembuat: {
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
    tableName: 'brand'
  }
);

module.exports = BrandModel;
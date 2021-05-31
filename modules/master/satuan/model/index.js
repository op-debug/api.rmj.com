const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../../../database/models");

class SatuanModel extends Model{}

SatuanModel.init(
  {
    satuan_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    satuan_kode: {
        type: DataTypes.STRING,
        defaultValue: ''
    },
    satuan_nama: {
        type: DataTypes.STRING,
        defaultValue: ''
    },
    device_id:{
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
    tableName: 'satuan'
  }
);

module.exports = SatuanModel;
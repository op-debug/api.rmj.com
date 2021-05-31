const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../../../database/models");

class PelangganModel extends Model{}

PelangganModel.init(
  {
    pelanggan_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    kelompokpelanggan_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    device_id: {
      type: DataTypes.STRING,
      defaultValue: '',
      primaryKey: true,
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
    pelanggan_nama: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    pelanggan_alamat: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    pelanggan_telp: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    pelanggan_tgllahir: {
      type: DataTypes.DATEONLY                    
    },
    pelanggan_jeniskelamin: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    pelanggan_blacklist: {
      type: DataTypes.BOOLEAN,
      defaultValue:0
    },    
    pelanggan_limit: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },    
    pelanggan_debe: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },    
    pelanggan_ceer: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    saldo: {
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
      type: DataTypes.STRING,
      defaultValue: ''
    }
  },
  {
    sequelize: sequelize,
    timestamps: false,
    tableName: 'pelanggan'
  }
);

module.exports = PelangganModel;
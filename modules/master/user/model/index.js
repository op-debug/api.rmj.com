const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../../../database/models");

class UserModel extends Model{}

UserModel.init(
  {
    user_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    password: {
      type: DataTypes.STRING,
      defaultValue: ''
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
    user_email: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    user_alamat: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    user_tgllahir: {
      type: DataTypes.DATEONLY                    
    },
    user_telp: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    user_status: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    },
    user_tgldibuat: {
      type: DataTypes.DATEONLY                    
    },
    user_idpembuat: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    user_tgledit: {
      type: DataTypes.DATEONLY                    
    },
    user_idedit: {
      type: DataTypes.STRING
    }

  },
  {
    sequelize: sequelize,
    timestamps: false,
    tableName: 'user',
  }
);

module.exports = UserModel;
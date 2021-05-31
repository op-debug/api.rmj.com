const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../../../database/models");

class MenuModel extends Model{}

MenuModel.init(
  {
        menu_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        menu_nama: {
            type: DataTypes.STRING,
            defaultValue:'',
            primaryKey:true
        }
  },
  {
    sequelize: sequelize,
    timestamps: false,
    tableName: 'menu'
  }
);

module.exports = MenuModel;
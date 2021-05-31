const MenuController = require("./controller");
const MenuModel = require("./model");
const MenuRepository = require("./repository");
const MenuService = require("./service");


const menuRepository = new MenuRepository({model: MenuModel});
const menuService = new MenuService({repository: menuRepository});
const menuController = new MenuController({service: menuService});

module.exports = {
  menuController,
  menuService,
  menuRepository
};
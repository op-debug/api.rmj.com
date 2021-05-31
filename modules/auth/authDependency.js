const AuthController = require("./controller");
const AuthModel = require("../master/user_pemilik/model");
const PerusahaanModel = require("../master/perusahaan/model")
const AuthRepository = require("./repository");
const AuthService = require("./service");


const authRepository = new AuthRepository({model: AuthModel,perusahaanmodel: PerusahaanModel});
const authService = new AuthService({repository: authRepository});
const authController = new AuthController({service: authService});

module.exports = {
  authController,
  authService,
  authRepository
};
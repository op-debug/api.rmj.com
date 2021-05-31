class AuthController {
  constructor({service}) {
    this.service = service;
    this.auth = this.auth.bind(this);
    this.forgot = this.forgot.bind(this);
    this.create = this.create.bind(this);
    this.aktifasi = this.aktifasi.bind(this);
  }

  async auth(req, res) {
    const {status, data} = await this.service.getLogin(req.body);
    return res.status(status).json(data);
  }

  async forgot(req,res){
      const {status,data} = await this.service.forgotpass(req.body);
      return res.status(status).json(data);
  }

  async create(req,res){
      const {status,data} = await this.service.createuser(req.body);
      return res.status(status).json(data);
  }
  
  async aktifasi(req,res){
    const {status,data} = await this.service.aktifasi(req.query);
    return res.status(status).json(data);
  }
}

module.exports = AuthController;
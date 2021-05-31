class SatuanController {
  constructor({service}) {
    this.service = service;
    this.create = this.create.bind(this);
    this.get = this.get.bind(this);
    this.update = this.update.bind(this);
    this.findone = this.findone.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(req, res) {
    const {status, data} = await this.service.create(req.body);
    return res.status(status).json(data)
  }

  async get(req, res) {
    const {status, data} = await this.service.get(req.body);
    return res.status(status).json(data);
  }

  async update(req, res) {
    const {status, data} = await this.service.update(req.body);
    return res.status(status).json(data);
  }

  async findone(req, res) {
    const {status, data} = await this.service.findone(req.body);
    return res.status(status).json(data);
  }

  async delete(req, res) {
    const {status, data} = await this.service.delete(req.body);
    return res.status(status).json(data);
  }

}

module.exports = SatuanController;
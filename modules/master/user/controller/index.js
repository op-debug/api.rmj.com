class UserController {
  constructor({service}) {
    this.service = service;
    this.create = this.create.bind(this);
    this.getAll = this.getAll.bind(this);
    this.search = this.search.bind(this);
    this.delete = this.delete.bind(this);
    this.update = this.update.bind(this);
  }

  async create(req, res) {
    const {status, data} = await this.service.createOrError(req.body);
    return res.status(status).json(data)
  }

  async getAll(req, res) {
    const {status, data} = await this.service.getAllAsList(req.body);
    return res.status(status).json(data);
  }

  async update(req, res) {
    const {status, data} = await this.service.getAllAsList();
    return res.status(status).json(data);
  }

  async delete(req, res) {
    const {status, data} = await this.service.deleteOrError(req.body);
    return res.status(status).json(data);
  }

  async search(req, res) {
    const {status, data} = await this.service.deleteOrError(req.body);
    return res.status(status).json(data);
  }
}

module.exports = UserController;
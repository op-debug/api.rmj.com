class PenjualanController {
  constructor({service}) {
    this.service = service;
    this.CreateKalkulator = this.CreateKalkulator.bind(this);
    this.getData = this.getData.bind(this);
  }

  async CreateKalkulator(req, res) {
    const {status, data} = await this.service.CreateKalkulator(req.body);
    return res.status(status).json(data)
  }

  async getData(req, res) {
    const {status, data} = await this.service.getData(req.body);
    return res.status(status).json(data);
  }
}

module.exports = PenjualanController;
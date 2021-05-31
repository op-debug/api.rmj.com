class PenjualanRepository {
  constructor({model_header,model_detail,model_produk}){
    this.model_header = model_header;
    this.model_detail = model_detail;
    this.model_produk = model_produk;
  }

  async CreateKalkulatorH(data) {
    return new Promise((resolve, reject) => {
      this.model_header.create(data)
        .then((document) => resolve(document))
        .catch((error) => reject(error))
    })
  }
  async CreateKalkulatorD(data) {
    return new Promise((resolve, reject) => {
      this.model_detail.create(data)
        .then((document) => resolve(document))
        .catch((error) => reject(error))
    })
  }

  async getData(data) {
    return new Promise((resolve, reject) => {
      this.model_header.hasMany(this.model_detail, {foreignKey: 'id_penjualan'})
      this.model_detail.belongsTo(this.model_header, {foreignKey: 'id_penjualan'})
      
      this.model_detail.hasMany(this.model_produk, {foreignKey: 'produk_id'})
      this.model_produk.belongsTo(this.model_detail, {foreignKey: 'produk_id'})
      
      this.model_header.findAll({
          where: {
              perusahaan_id: data.perusahaan_id,
              cabang_id: data.cabang_id, 
              tanggal: {
                  between: [data.tanggal_dari, data.tanggal_sampai]
              }
          },
          include: [{
              model: this.model_detail,
              include: [{
                model: this.model_produk
              }]
          }]  
      })
        .then((document) => resolve(document))
        .catch((error) => reject(error))
    })
  }
}

module.exports = PenjualanRepository;
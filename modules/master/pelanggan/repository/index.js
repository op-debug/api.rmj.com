class PelangganRepository {
  constructor({model}){
    this.model = model;
  }

  async create(data) {
    return new Promise((resolve, reject) => {
      this.model.create(data)
        .then((document) => resolve(document))
        .catch((error) => reject(error))
    })
  }

  async findone(data){
      return new Promise((resolve, reject) => {
        this.model.findOne({
           where:{
              perusahaan_id: data.perusahaan_id,
              pelanggan_id: data.pelanggan_id
           }
        })
          .then((document) => {
              if (document=="" || (!document)) {                  
                    resolve({status:200,error:false,data:"Pelanggan tidak ditemukan!"});
              }
              else{
                  resolve({status:200,error:false,data:document});
              }
            })
          .catch((error) => reject(error))
      })
  }
  async get(data) {
    return new Promise((resolve, reject) => {
      this.model.findAll({
        where:{
          perusahaan_id: data.perusahaan_id,
          cabang_id:data.cabang_id
        }
      })
        .then((document) => resolve(document))
        .catch((error) => reject(error))
    })
  }
  
  async update(data) {
    return new Promise((resolve, reject) => {
      this.model.update({
          pelanggan_nama:data.pelanggan_nama,
          pelanggan_alamat:data.pelanggan_alamat,
          pelanggan_telp:data.pelanggan_telp,
          pelanggan_tgllahir:data.pelanggan_tgllahir,
          pelanggan_jeniskelamin:data.pelanggan_jeniskelamin,
          pelanggan_blacklist:data.pelanggan_blacklist,
          pelanggan_limit:data.pelanggan_limit,
          tgledit: data.tgledit,
          idedit:data.idedit
      },{
          where :{
              perusahaan_id: data.perusahaan_id,
              pelanggan_id: data.pelanggan_id
          }
      })
        .then((document) => resolve(document))
        .catch((error) => reject(error))
    })
  }


  async search(data) {
    return new Promise((resolve, reject) => {
      this.model.create(data)
        .then((document) => resolve(document))
        .catch((error) => reject(error))
    })
  }

  async delete(data) {
    return new Promise((resolve, reject) => {
      this.model.destroy({
        where :{
          perusahaan_id: data.perusahaan_id,
          cabang_id:data.cabang_id,
          pelanggan_id: data.pelanggan_id
        }
      })
        .then((document) => resolve(document))
        .catch((error) => reject(error))
    })
  }

}

module.exports = PelangganRepository;
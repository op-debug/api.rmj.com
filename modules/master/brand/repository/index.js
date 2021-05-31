class BrandRepository {
  constructor({model}){
    this.model = model;
  }
  async cekkode(data){
    return new Promise((resolve, reject) => {
      this.model.findOne({
        where:{
            perusahaan_id: data.perusahaan_id,
            cabang_id:data.cabang_id,
            brand_kode:data.brand_kode
        }
      })
        .then((document) => {
          if (document=="" || (!document)) {                  
              resolve({status:200,error:false,data:false});
          }
          else{resolve({status:200,error:false,data:true});}
        })
        .catch((error) => reject(error))
    })
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
              cabang_id: data.cabang_id,
              brand_id: data.brand_id
           }
        })
          .then((document) => {
              if (document=="" || (!document)) {                  
                    resolve({status:200,error:false,data:"Brand tidak ditemukan!"});
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
          where: {
            perusahaan_id: data.perusahaan_id,
            cabang_id: data.cabang_id
          }
      })
        .then((document) => resolve(document))
        .catch((error) => reject(error))
    })
  }
  
  async update(data) {
    return new Promise((resolve, reject) => {
      this.model.update({
          brand_kode: data.brand_kode,
          brand_nama:data.brand_nama,
          tgledit: data.tgledit,
          idedit:data.idedit
      },{
          where :{
              perusahaan_id: data.perusahaan_id,
              cabang_id:data.cabang_id,
              brand_id: data.brand_id
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
          cabang_id: data.cabang_id,
          brand_id: data.brand_id
        }
      })
        .then((document) => resolve(document))
        .catch((error) => reject(error))
    })
  }

}

module.exports = BrandRepository;
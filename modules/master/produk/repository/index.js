class ProdukRepository {
  constructor({model}){
    this.model = model;
  }
  
  async cekbarcode(data){
    return new Promise((resolve, reject) => {
      this.model.findOne({
        where:{
            perusahaan_id: data.perusahaan_id,
            cabang_id: data.cabang_id,
            produk_barcode: data.produk_barcode
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
              produk_id: data.produk_id
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
          produk_nama:data.produk_nama,
          kategori_id: data.kategori_id,
          satuan_id: data.satuan_id,
          brand_id: data.brand_id,
          produk_barcode: data.produk_barcode,
          harga_jual: data.harga_jual,
          harga_beli: data.harga_beli,
          minimal_stok: data.minimal_stok,
          maksimal_stok: data.maksimal_stok,
          tgledit: data.tgledit,
          idedit:data.idedit
      },{
          where :{
              perusahaan_id: data.perusahaan_id,
              cabang_id: data.cabang_id,
              produk_id: data.produk_id
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
          produk_id: data.produk_id
        }
      })
        .then((document) => resolve(document))
        .catch((error) => reject(error))
    })
  }

}

module.exports = ProdukRepository;
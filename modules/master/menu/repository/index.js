class MenuRepository {
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
              menu_id: data.menu_id
           }
        })
          .then((document) => {
              if (document=="" || (!document)) {                  
                    resolve({status:200,error:false,data:"Menu tidak ditemukan!"});
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
          menu_id:data.menu_id
        }
      })
        .then((document) => resolve(document))
        .catch((error) => reject(error))
    })
  }
  
  async update(data) {
    return new Promise((resolve, reject) => {
      this.model.update({
          menu_nama: data.menu_nama
      },{
          where :{
              menu_id: data.menu_id,
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
          menu_id: data.menu_id
        }
      })
        .then((document) => resolve(document))
        .catch((error) => reject(error))
    })
  }

}

module.exports = MenuRepository;
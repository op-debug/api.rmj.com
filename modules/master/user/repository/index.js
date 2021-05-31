class UserRepository {
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
  async delete(data) {
      return new Promise((resolve,reject)=>{
         this.model.delete({
            where: {
                outlet_id: data.outlet_id,
                perusahaan_id: data.perusahaan_id,
                user_id : data.user_id
            }
         })
         .then((document)=>resolve(document))
         .catch((error)=>reject(error))
      })
  }
  async gets(data) {
    return new Promise((resolve, reject) => {
      this.model.findAll({
          where : {
              outlet_id : data.outlet_id,
              perusahaan_id : data.perusahaan_id
          }
      })
        .then((document) => resolve(document))
        .catch((error) => reject(error))
    })
  }
  
  async update(Data){
      return new Promise((resolve,reject)=>{
        this.model.update(Data)
          .then((document)=> resolve(document))
          .catch((error)=>reject(error))
      })
  }
}

module.exports = UserRepository;
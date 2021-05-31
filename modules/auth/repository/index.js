class AuthRepository {
  constructor({model,perusahaanmodel}){
    this.model = model;
    this.perusahaanmodel = perusahaanmodel;
  }
  async cekperusahaandouble(data){
      return new Promise((resolve,reject)=>{
          this.perusahaanmodel.findOne({
            where:{
                perusahaan_nama: data.perusahaan
            }
          })
          .then((document) =>{
              if (document=="" || (!document)) {                  
                  resolve({status:200,error:false,data:true});
              }
              resolve({status:200,error:true,data: "Perusahaan Sudah Digunakan!."});
          })
          .catch((error) => reject(error))
      })
  }
  async cekdouble(data){
      return new Promise((resolve,reject)=>{
          this.model.findOne({
             where:{
                  username: data.username
             }
          })
          .then((document) =>{
              if (document=="" || (!document)) {                  
                  this.model.findOne({
                      where:{
                          email: data.email
                      }
                  })
                  .then((document)=>{
                      if(document=="" || (!document)){
                        resolve({status:200,error:false,data: ""});
                      }
                      resolve({status:200,error:true,data: "Email Sudah Pernah digunakan!."});

                  })
                  .catch((error) => reject(error))
              }
              else{
                resolve({status:200,error:true,data: "Username Sudah Pernah digunakan!."});
              }
          })
          .catch((error) => reject(error))
      })
  }
  async create(data){
      return new Promise((resolve,reject)=>{
          this.model.create(data)
          .then((document) => resolve({status:200,error:false,data:document.dataValues}))
          .catch((error) => reject(error))
      });
  }

  async createperusahaan(data){
      return new Promise((resolve,reject)=>{
          this.perusahaanmodel.create(data)
          .then((document) => resolve(document))
          .catch((error) => reject(error))
      });
  }

  async cekemail(data){
    return new Promise((resolve, reject) => {
      this.model.findOne({
          where: {
            email: data.email
          }
      })
      .then((document) =>{
          if (document=="" || (!document)) {
            resolve({status:200,error:true,data: "Email Tidak Ditemukan!."});
          }
          resolve({status:200,error:false,data:{
            email: document.email,
            password: document.password,
            username: document.username
            }
          });
      })
      .catch((error)=> reject(error))
    })
  }

  async getLog(data){
    var jwt = require("jsonwebtoken");
    const config = require("../../../config/auth.js");

    return new Promise((resolve, reject) => {
      this.model.hasOne(this.perusahaanmodel, {foreignKey: 'userpemilik_id'})
      this.perusahaanmodel.belongsTo(this.model, {foreignKey: 'userpemilik_id'})
      this.model.findOne({
          where: {
            username: data.username,
            password: data.password
          },
          include: [{
            model: this.perusahaanmodel
          }]
      })
        .then((document) =>{
          if (document=="" || (!document)) {
              resolve({status:200,error:true,data: "User Not found."});
          }
          if (document.status_aktif==0){
            resolve({status:200,error:true,data: "akun anda belum aktif,<br>silahkan cek e-mail anda untuk aktifasi"});
          }
          var token = jwt.sign({ id: document.username }, config.secret, {
            expiresIn: 86400 // 24 hours
          });
    
          resolve({status:200,error:false,data:{
                user_data: document,
                accessToken: token
                }
          });
        })
        .catch((error) => reject(error))
    })
  }

  async aktifasi(data){
    return new Promise((resolve,reject)=>{
        this.model.update({
            status_aktif:1
        },{
          where:{
              userpemilik_id: data.userpemilik_id
          }}
        )
        .then((document) =>{ 
                if (document=="" || (!document)) {
                  resolve({status:200,error:true,data:"User Not found."});
                }
                  resolve({status:200,error:true,data:"Aktifasi berhasil, silahkan login <a href="+ process.env.HALAMAN_LOGIN +">disini</a>"})
                }
            )
        .catch((error) => reject(error))
    });
  }
}

module.exports = AuthRepository;
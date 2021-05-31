class AuthService {
  constructor({repository}) {
    this.repository = repository;
  }
  async createuser(data){
      if (!data.username) return {status:200,data:{status:200,error:true,data:"username belum diisi"}};
      if (!data.password) return {status:200,data:{status:200,error:true,data:"password belum diisi"}};
      if (!data.email) return {status:200,data:{status:200,error:true,data:"email belum diisi"}};
      if (!data.perusahaan) return {status:200,data:{status:200,error:true,data:"perusahaan belum diisi"}};  
      const status = await this.repository.cekdouble(data);
      if (status.error == true){
        return {status:200, data: status }
      }
      else{
        const cekperusahaandouble = await this.repository.cekperusahaandouble(data);
        if (cekperusahaandouble.error == true){
            console.log(cekperusahaandouble);
            return {status:200, data: cekperusahaandouble }
        }
        else{
            var datauser =  {
                username: data.username,
                email: data.email,
                password: data.password,
                alamat: data.alamat,
                status_aktif:0,
                tgldibuat: data.tgldibuat,
                idpembuat: data.idpembuat
            }
            const create = await this.repository.create(datauser);
            if (create.error == false){
                var dataperusahaan =  
                    {
                      perusahaan_nama: data.perusahaan,
                      perusahaan_alamat: data.alamat,
                      userpemilik_id: create.data.userpemilik_id,
                      tgldibuat: data.tgldibuat,
                      idpembuat: data.idpembuat
                    }
                const createperusahaan = await this.repository.createperusahaan(dataperusahaan);
                const nodemailer = require("nodemailer");                
                let transporter = nodemailer.createTransport({
                  host: process.env.HOST_EMAIL,
                  port: process.env.PORT_EMAIL,
                  secure: false, 
                  auth: {
                    user: process.env.EMAIL, 
                    pass: process.env.PASSWORD_EMAIL, 
                    rejectUnauthorized:false,
                  }
                });
        
                let info = await transporter.sendMail({
                  from: '"Aktifasi Akun te-pos.com" <'+process.env.EMAIL+'>', 
                  to: data.email, 
                  subject: "Aktifasi akun te-pos.com", 
                  html: "<b>Silahkan aktifasi akun anda <a href='"+process.env.HALAMAN_AKTIFASI + create.data.userpemilik_id+"'>disini</a>", 
                });       
                return {status:200, data:{status:200,error:false,data:createperusahaan}}
            }
        }  
      }
  }
  

  async getLogin(data){
    if (!data.username) return {status:200,data:{status:200,error:true,data:"username belum diisi"}};
    if (!data.password) return {status:200,data:{status:200,error:true,data:"password belum diisi"}};
    const login = await this.repository.getLog(data);
    return {status:200, data: login}
  }

  async forgotpass(data){
    const nodemailer = require("nodemailer");
    if (!data.email) return {status:200,data:{status:200,error:true,data:"Email Belum Diisi!."}};
    const cekemail = await this.repository.cekemail(data);
    if(cekemail.error==true){
      return {status:200,data:cekemail}
    }else{
        let transporter = nodemailer.createTransport({
          host: process.env.HOST_EMAIL,
          port: process.env.PORT_EMAIL,
          secure: false, 
          auth: {
            user: process.env.EMAIL, 
            pass: process.env.PASSWORD_EMAIL, 
            rejectUnauthorized:false,
          }
        });

        let info = await transporter.sendMail({
          from: '"Lupa Password te-pos" <'+process.env.EMAIL+'>', 
          to: data.email, 
          subject: "Lupa Password", 
          html: "<b>Username : "+ cekemail.data.username +"<br/>Password : "+ cekemail.data.password  +"</b><br/><br/><br/>Silahkan Login <a href='"+process.env.HALAMAN_LOGIN+"'>disini</a>", 
        });
        console.log(cekemail.data.password)
        console.log("Message sent: %s", info.messageId);
        return {status:200,data:{status:200,error:false,data:"Berhasil Terkirim"}};
    }
  }

  async aktifasi(data){
    if (!data.userpemilik_id) return {status:200,data:{status:200,error:true,data:"id kosong"}};
    const login = await this.repository.aktifasi(data);
    return {status:200, data: login}
  }

}
module.exports = AuthService;
class PelangganService {
  constructor({repository}) {
    this.repository = repository;
  }

  async create(data) {
    if (!data.pelanggan_nama) return {status:200,data:{status:200,error:true,data:"Nama Pelanggan Kosong"}};
    if (!data.perusahaan_id) return {status:200,data:{status:200,error:true,data:"perusahaan id not found"}};
    if (!data.cabang_id) return {status:200,data:{status:200,error:true,data:"cabang not found"}};
    try{
      const result = await this.repository.create(data)
      return { status: 201, data: {status:200,error:false,data:'Pelanggan Created'}};
    }catch(error) {
      return { status: 500, data: error}
    }
  }

  async get(data) {
    if (!data.perusahaan_id) return {status:200,data:{status:200,error:true,data:"perusahaan id not found"}};
    if (!data.cabang_id) return {status:200,data:{status:200,error:true,data:"cabang id not found"}};
    const result = await this.repository.get(data);
    return { status: 200, data: {status:200,error:false,data:result}}
  }

  async update(data) {
    if (!data.pelanggan_nama) return {status:200,data:{status:200,error:true,data:"Nama Pelanggan Kosong"}};
    if (!data.perusahaan_id) return {status:200,data:{status:200,error:true,data:"perusahaan id not found"}};
    if (!data.pelanggan_id) return {status:200,data:{status:200,error:true,data:"Pelanggan id not found"}};
    try{
        const result = await this.repository.update(data);
        return { status: 201, data: {status:200,error:false,data:'Pelanggan Update'}};
    }catch(error) {
      return { status: 500, data: {status:500,error:true,data:'Gagal Update'}}
    }
  }

  async findone(data) {
    if (!data.perusahaan_id) return {status:200,data:{status:200,error:true,data:"perusahaan id not found"}};
    if (!data.pelanggan_id) return {status:200,data:{status:200,error:true,data:"Pelanggan id not found"}};
    const result = await this.repository.findone(data);
    return { status: 200, data: result }
  }

  async delete(data) {
    try{
      const result = await this.repository.delete(data);
      return { status: 200, data: {status:500,error:false,data:'Berhasil di  Hapus'} }
    }
    catch(error) {
      return { status: 500, data: {status:500,error:true,data:'Gagal Hapus'}}
    }
  }
}

module.exports = PelangganService;
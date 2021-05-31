class BrandService {
  constructor({repository}) {
    this.repository = repository;
  }

  async create(data) {
    if (!data.produk_nama) return {status:200,data:{status:200,error:true,data:"Nama Produk Kosong"}};
    if (!data.produk_barcode) return {status:200,data:{status:200,error:true,data:"Kode Barcode Kosong"}};
    if (!data.perusahaan_id) return {status:200,data:{status:200,error:true,data:"perusahaan id not found"}};
    if (!data.cabang_id) return {status:200,data:{status:200,error:true,data:"cabang not found"}};
    try{
      const cekbarcode = await this.repository.cekbarcode(data)
      if (cekbarcode.data == false){
        const result = await this.repository.create(data)
        return { status: 201, data: {status:200,error:false,data:'Produk Created'}};
      }else{
        return { status: 201, data: {status:200,error:true,data:'Kode Sudah Digunakan'}};
      }
    }catch(error) {
      return { status: 500, data: error}
    }
  }

  async get(data) {
    const result = await this.repository.get(data);
    return { status: 200, data: {status:200,error:false,data:result}}
  }

  async update(data) {
    if (!data.produk_nama) return {status:200,data:{status:200,error:true,data:"Nama Produk Kosong"}};
    if (!data.produk_barcode) return {status:200,data:{status:200,error:true,data:"Kode Barcode Kosong"}};
    if (!data.perusahaan_id) return {status:200,data:{status:200,error:true,data:"perusahaan id not found"}};
    if (!data.cabang_id) return {status:200,data:{status:200,error:true,data:"cabang not found"}};
    try{
        const result = await this.repository.update(data);
        return { status: 201, data: {status:200,error:false,data:'Produk Update'}};
    }catch(error) {
      return { status: 500, data: {status:500,error:true,data:'Gagal Update'}}
    }
  }

  async findone(data) {
    if (!data.perusahaan_id) return {status:200,data:{status:200,error:true,data:"perusahaan id not found"}};
    if (!data.produk_id) return {status:200,data:{status:200,error:true,data:"produk id not found"}};
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

module.exports = BrandService;
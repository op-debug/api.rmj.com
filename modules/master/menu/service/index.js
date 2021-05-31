class MenuService {
  constructor({repository}) {
    this.repository = repository;
  }

  async create(data) {
    if (!data.menu_id) return {status:200,data:{status:200,error:true,data:"Id Menu Kosong"}};
    if (!data.menu_nama) return {status:200,data:{status:200,error:true,data:"Nama Menu Kosong"}};
    
    try{
        const result = await this.repository.create(data)
        return { status: 201, data: {status:200,error:false,data:'Menu Created'}};
    }catch(error) {
        return { status: 500, data: error}
    }
  }

  async get(data) {
      const result = await this.repository.get(data);
      return { status: 200, data: {status:200,error:false,data:result}}
  }

  async update(data) {
    if (!data.menu_id) return {status:200,data:{status:200,error:true,data:"Id Menu Kosong"}};
    if (!data.menu_nama) return {status:200,data:{status:200,error:true,data:"Nama Menu Kosong"}};
    try{
        const result = await this.repository.update(data);
        return { status: 201, data: {status:200,error:false,data:'Menu Update'}};
    }catch(error) {
      return { status: 500, data: {status:500,error:true,data:'Gagal Update'}}
    }
  }

  async findone(data) {
    if (!data.menu_id) return {status:200,data:{status:200,error:true,data:"Menu id not found"}};
    if (!data.menu_nama) return {status:200,data:{status:200,error:true,data:"Nama Menu not found"}};
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

module.exports = MenuService;
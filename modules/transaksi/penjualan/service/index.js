class PenjualanService {
  constructor({repository}) {
    this.repository = repository;
  }

  async CreateKalkulator(data) {
    if (!data.perusahaan_id) {
      data.perusahaan_id=""
    };
    console.log(data);
    try{
      var dataH = {
          tanggal: data.tanggal,
          pelanggan: data.pelanggan,
          perusahaan_id: data.perusahaan_id,
          cabang_id: data.cabang_id,
          referensi: "",
          no_order: "",
          tgldibuat: data.tgldibuat,
          idpembuat: data.idpembuat}
      const createdH = await this.repository.CreateKalkulatorH(dataH)
      try {
          var dataD = {
              id_penjualan:createdH.dataValues.id_penjulaan,
              pelanggan: data.pelanggan,
              tanggal: data.tanggal,
              referensi: "",
              no_order: "",
              perusahaan_id: data.perusahaan_id,
              cabang_id: data.cabang_id,
              satuan: data.satuan,
              qty: data.qty,
              harga: data.harga,
              diskon: 0,
              ppn: 0,
              biaya: 0,
              tgldibuat: data.tgldibuat,
              idpembuat: data.idpembuat}
          const createdD = await this.repository.CreateKalkulatorD(dataD)
          return { status: 201, data: {status:200,error:false,data: 'Penjualan Created'}};
      
      }catch(error) {
        return { status: 500, data:{status:200,error :true, data  :error}}
      }
    }catch(error) {
      return { status: 500, data:{status:200,error :true, data  :error}}
    }
  }

  async getData(data) {
    if (!data.cabang_id) return {status:200,data:{status:200,error:true,data:"cabang id belum diisi"}};
    if (!data.perusahaan_id) {
      data.perusahaan_id=""
    };
    console.log(data);
    const Kalkulator = await this.repository.getData(data);
    return { status: 200, data: {status:200,error:false,data:Kalkulator}}
  }
}

module.exports = PenjualanService;
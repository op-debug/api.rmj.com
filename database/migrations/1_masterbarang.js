module.exports = {
    up: function(queryInterface, DataTypes) {        
        return (
            queryInterface.createTable('masterbarang',
                {
                    produk_id: {
                        type: DataTypes.UUID,
                        defaultValue: DataTypes.UUIDV4,
                        primaryKey: true,
                    },
                    satuan_id: {
                        type: DataTypes.UUID,
                        defaultValue: DataTypes.UUIDV4,
                        primaryKey: true,
                    },
                    brand_id: {
                        type: DataTypes.UUID,
                        defaultValue: DataTypes.UUIDV4,
                        primaryKey: true,
                    },
                    nama_barang: {
                        type: DataTypes.STRING,
                        defaultValue: ''
                    },
                    inisial:{
                        type: DataTypes.STRING,
                        defaultValue:''
                    },
                    barcode:{
                        type: DataTypes.STRING,
                        defaultValue:''
                    },
                    gambar: {
                        type: DataTypes.DATEONLY,
                    },
                    minimal_stok: {
                        type: DataTypes.INTEGER,
                    },
                    tgldibuat: {
                        type: DataTypes.DATEONLY                    
                    },
                    idpembuat: {
                        type: DataTypes.STRING,
                        defaultValue: ''
                    },
                    tgledit: {
                        type: DataTypes.DATEONLY                    
                    },
                    idedit: {
                        type: DataTypes.STRING,
                        defaultValue: ''
                    },
                    status: {
                        type: DataTypes.BOOLEAN
                    }
                },
                {
                engine: 'MYISAM',
                charset: 'latin1'
                }
            )
        )
    }
}

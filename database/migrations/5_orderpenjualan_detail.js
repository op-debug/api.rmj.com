module.exports = {
    up: function(queryInterface, DataTypes) {        
        return (
            queryInterface.createTable('orderpenjualan_detail',
                {
                    orderpenjualandetail_id: {
                        type: DataTypes.UUID,
                        defaultValue: DataTypes.UUIDV4,
                        primaryKey: true,
                    },
                    orderpenjualan_id: {
                        type: DataTypes.UUID,
                        defaultValue: DataTypes.UUIDV4,
                        primaryKey: true,
                    },
                    user_id: {
                        type: DataTypes.UUID,
                        defaultValue: DataTypes.UUIDV4
                    },
                    no_transaksi: {
                        type: DataTypes.STRING,
                        defaultValue: ''
                    },
                    tanggal: {
                        type: DataTypes.DATEONLY
                    },
                    produk_id: {
                        type: DataTypes.UUID,
                        defaultValue: DataTypes.UUIDV4,
                        primaryKey: true,
                    },
                    qty: {
                        type: DataTypes.INTEGER,
                        defaultValue: 0,
                        primaryKey: true,
                    },
                    harga: {
                        type: DataTypes.INTEGER,
                        defaultValue: 0,
                        primaryKey: true,
                    },
                    diskon: {
                        type: DataTypes.INTEGER,
                        defaultValue: 0,
                        primaryKey: true,
                    },
                    hrgnet: {
                        type: DataTypes.INTEGER,
                        defaultValue: 0,
                        primaryKey: true,
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
                    },
                },
                {
                engine: 'MYISAM',
                charset: 'latin1'
                }
            )
        )
    }
}

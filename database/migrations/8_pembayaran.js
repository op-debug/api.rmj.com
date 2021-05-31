module.exports = {
    up: function(queryInterface, DataTypes) {        
        return (
            queryInterface.createTable('pembayaran',
                {
                    pembayaran_id: {
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
                    nominal: {
                        type: DataTypes.INTEGER,
                        defaultValue: 0
                    },
                    bayar: {
                        type: DataTypes.INTEGER,
                        defaultValue: 0
                    },
                    status_pembayaran: {
                        type: DataTypes.STRING,
                        defaultValue:''                    
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

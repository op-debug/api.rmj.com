module.exports = {
    up: function(queryInterface, DataTypes) {        
        return (
            queryInterface.createTable('masterbrand',
                {
                    brand_id: {
                        type: DataTypes.UUID,
                        defaultValue: DataTypes.UUIDV4,
                        primaryKey: true,
                    },
                    nama_brand: {
                        type: DataTypes.STRING,
                        defaultValue: ''
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

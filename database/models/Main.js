module.exports = (sequelize, dataTypes) => {
    let alias = 'Main';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING,
        },
        address: {
            type: dataTypes.STRING,
        },
        phone: {
            type: dataTypes.STRING,
        },
        facebook: {
            type: dataTypes.STRING,
        },
        instagram: {
            type: dataTypes.STRING,
        },
        email: {
            type: dataTypes.STRING,
        }
    }
    let config = {
        tableName: 'main',
        timestamps: false
    }

    let Main = sequelize.define(alias, cols, config);

    return Main;

}
module.exports = (sequelize, dataTypes) =>{
    let alias = "Alumnos";
    
    let cols = {
        legajo : {
            type: dataTypes.INTEGER,
            primaryKey: true,
        },
        nombre: {
            type: dataTypes.STRING,
        },
        telefono: {
            type: dataTypes.INTEGER,
        },
        id_carrera: {
            type: dataTypes.INTEGER,
        }
    };

    let config = {
        tableName: "alumnos",
        timestamps: false
    };

    const Alumno = sequelize.define(alias, cols , config);
    return Alumno;
}

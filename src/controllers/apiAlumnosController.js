const db = require("../database/models");

const apiAlumnosController = {
    list: (req,res) =>{
        db.Alumnos.findAll()
            .then(alumnos =>{
                return res.json({
                    total: alumnos.length,
                    data: alumnos,
                    status:200
                })
            });
    },
    detail: (req,res) =>{
        db.Alumnos.findByPk(req.params.id)
            .then(alumno =>{
                return res.json({
                    data: alumno,
                    status:200
                })
            });
    },
    store: (req,res) =>{
        db.Alumnos.findByPk(req.params.id)
            .then(alumno =>{
                return res.json({
                    data: alumno,
                    status:200
                })
            });
    }
}


module.exports = apiAlumnosController;
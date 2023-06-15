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
        res.send("holiiiiiiiiis");
    }
}


module.exports = apiAlumnosController;
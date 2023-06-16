const express = require("express");
const router = express.Router();

const apiAlumnosController = require("../../controllers/apiAlumnosController");

router.get("/alumnos", apiAlumnosController.list);
router.get("/alumnos/:id", apiAlumnosController.detail);

router.post("/alumnos/create", apiAlumnosController.store);
router.delete("/alumnos/delete/:id", apiAlumnosController.delete);

module.exports = router;


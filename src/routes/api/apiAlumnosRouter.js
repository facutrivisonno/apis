const express = require("express");
const router = express.Router();

const apiAlumnosController = require("../../controllers/apiAlumnosController");

router.get("/alumnos", apiAlumnosController.list);
router.get("/alumnos/:id", apiAlumnosController.detail);

module.exports = router;


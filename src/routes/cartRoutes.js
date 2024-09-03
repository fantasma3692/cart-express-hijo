const express = require('express');
const router = express.Router();
const {createVentas,getVentaPorIdUser} = require("../controllers/ventasController")
const {createDetalleVentas,getDetalleVentaPorIdVenta} = require("../controllers/detalleVentaController")
const authenticate = require("../middleware/authenticate")
router.post("/",authenticate,createVentas)
router.post("/item/:id_usuario",authenticate,createDetalleVentas)
router.get("/:id_usuario",authenticate,getVentaPorIdUser)
module.exports = router

const {
  crearVenta,mostrarVentaPorIdUser
} = require("../models/VentasModel");

exports.getVentaPorIdUser = async (req, res, next) => {
  const { id_usuario } = req.params;
  try {
    const response = await mostrarVentaPorIdUser(id_usuario);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

exports.createVentas = async (req, res, next) => {
  const { id_usuario, estado, total } = req.body;
  try {
    const response = await crearVenta(id_usuario, estado, total);
    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};


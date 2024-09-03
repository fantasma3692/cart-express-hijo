const {
  crearDetalleVenta,
  mostrarDetalleVentaPorIdVenta,
} = require("../models/DetalleVentasModel");
const { mostrarVentaPorIdUser } = require("../models/VentasModel");
exports.getDetalleVentaPorIdVenta = async (req, res, next) => {
  const { id_venta } = req.params;
  try {
    const response = await mostrarDetalleVentaPorIdVenta(id_venta);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

exports.createDetalleVentas = async (req, res, next) => {
  const userId = req.params.id_usuario
  const {  id_producto, descripcion, precio_venta, cantidad, total } =
    req.body;
  try {
    const venta = await mostrarVentaPorIdUser(userId);
    if(!venta){
      return res.status(404).json({ error: 'Venta no encontrada' });
    }


    const response = await crearDetalleVenta(
      venta.id,
      id_producto,
      descripcion,
      precio_venta,
      cantidad,
      total
    );
    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

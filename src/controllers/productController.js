const {
  mostrarProductosTodos,
  mostrarProductosXId,
  crearProductos,
  editarProductos,
  eliminarProductos,
} = require("../models/Product");
exports.getProducts = async (req, res, next) => {
  try {
    const result = await mostrarProductosTodos();
    res.status(200).json(result);
  } catch (error) {
    next(error); // Pasar el error al middleware
  }
};
exports.getProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const response = await mostrarProductosXId(id);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

exports.createProduct = async (req, res, next) => {
  const { name, price, imagen } = req.body;
  try {
    const response = await crearProductos(name, price, imagen);
    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};
exports.updateProduct = async (req, res, next) => {
  const { id } = req.params;
  const { name, price, imagen } = req.body;
  try {
    const response = await editarProductos(name, price, imagen, id);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

exports.deleteProduct = async (req, res, next) => {
  const { id } = req.params;

  try {
    const response = await eliminarProductos(id);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

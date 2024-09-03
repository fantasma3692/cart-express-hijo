const pool = require("../config/db");
const tabla = "productos";
exports.mostrarProductosTodos = async () => {
  const { rows } = await pool.query("SELECT * FROM productos");
  return rows;
};
exports.mostrarProductosXId = async (id) => {
  const { rows } = await pool.query(`SELECT * FROM ${tabla} where id = $1`, [
    id,
  ]);
  return rows[0];
};
exports.crearProductos = async (name, price, imagen) => {
  const { rows } = await pool.query(
    `INSERT INTO ${tabla} (name,price,imagen) VALUES ($1, $2, $3) RETURNING *`,
    [name, price, imagen]
  );
  return rows[0];
};
exports.editarProductos = async (name, price, imagen, id) => {
  const { rows } = await pool.query(
    `UPDATE ${tabla} SET name = $1, price = $2, imagen = $3 where id = $4 RETURNING *`,
    [name, price, imagen, id]
  );
  return rows[0];
};
exports.eliminarProductos = async (id) => {
  const { rows } = await pool.query(`DELETE FROM ${tabla} WHERE id = $1 RETURNING *`, [id]);
  return rows[0];
};

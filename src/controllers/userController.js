
const {crearUser,mostrarUserXIdsupabase} = require("../models/UserModel")
exports.getUserXIdsupabase = async (req, res, next) => {
  const { id_auth_supabase } = req.params;
  try {
    const response = await mostrarUserXIdsupabase(id_auth_supabase);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

exports.createUser = async (req, res, next) => {
  const { role, id_auth_supabase, name } = req.body;
  try {
    const response = await crearUser(role, id_auth_supabase, name);
    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

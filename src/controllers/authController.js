const supabase = require("../config/supabase");
const { crearUser } = require("../models/UserModel");

exports.signUpNewEmail = async (req, res) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) return res.status(400).json({ error: error.stack });

  res.status(200).json({ user: data.user });
  const p = {
    role: "usuario",
    id_auth_supabase: data.user.id,
    name: "generico",
  };
  const {role,id_auth_supabase,name} = p
  await crearUser(role,id_auth_supabase,name);
};
exports.signInNewSession = async (req, res) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) return res.status(400).json({ error: error.stack });
  res.status(200).json({ session: data.session });
};

const pool = require("../config/db")
const tabla ="users"
exports.mostrarRolXIduser = async(idAuthSupabase)=>{
    const {rows} = await pool.query("SELECT role FROM users where id_auth_supabase = $1",[idAuthSupabase])
    return rows[0]?.role
}
exports.mostrarUserXIdsupabase = async(idAuthSupabase)=>{
    const {rows} = await pool.query("SELECT * FROM users where id_auth_supabase = $1",[idAuthSupabase])
    return rows[0]
}
exports.crearUser = async (role, id_auth_supabase, name) => {
    const { rows } = await pool.query(
      "INSERT INTO users (role,id_auth_supabase,name) VALUES ($1, $2, $3) RETURNING *",
      [role, id_auth_supabase, name]
    );
    return rows[0];
  };
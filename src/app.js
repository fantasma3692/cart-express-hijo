require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const cartRoutes = require("./routes/cartRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
const PORT = process.env.DB_PORT || 3000;
app.use(helmet());
app.use(bodyParser.json());
app.use(errorHandler); //controlador de errores
app.use("/api/auth", authRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.listen(PORT, () => {
  console.log(`Server iniciado en el puerto ${PORT}`);
});

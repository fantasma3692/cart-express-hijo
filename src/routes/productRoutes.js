const express = require('express');
const router = express.Router();
const {getProducts,getProduct,createProduct,updateProduct,deleteProduct} = require("../controllers/productController")
const authenticate = require("../middleware/authenticate")
const {isAdmin} = require("../middleware/isAdmin")


router.get("/",getProducts)
router.get("/:id",getProduct)


router.post("/",authenticate,isAdmin,createProduct)
router.put("/:id",authenticate,isAdmin,updateProduct)
router.delete("/:id",authenticate,isAdmin,deleteProduct)
 module.exports = router

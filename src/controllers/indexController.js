const products = require("../data/products")

module.exports={
    index: (req,res)=>{
        res.render("index",{products})
    },
    detalle: (req,res)=>{
        const {id}=req.params;
        const product = products.find(product => product.id === +id)
        res.render("detalleMenu", {product})
    },
}
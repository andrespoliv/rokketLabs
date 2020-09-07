import express from "express";
import Product from "../models/productModel.js"

const router = express.Router();

router.get("/", async(req, res)=>{
    const products = await Product.find({});
    res.send(products);
});

router.get("/:id", async(req, res)=>{
    const product = await Product.findOne({_id:req.params.id});
    if(product){
        res.send(product);
    }else{
        res.status(404).send({message:"Product not found"});
    }
});

router.get("/", async(req, res)=>{
    const products = await Product.find({});
    res.send(products);
});


router.post("/", async(req, res)=>{
    const product = new Product({
        name: req.body.name,
        image: req.body.image,
        brand: req.body.brand,
        price: req.body.price,
        category: req.body.category,
        countInStock: req.body.countInStock,
        description: req.body.description,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
    });
    const newProduct = await product.save();
    if(newProduct){
        return res.status(201).send({message : "New product created", data: newProduct});
    }
    return res.status(501).send({message: "There is an error"});
});


router.put("/:id", async(req, res)=>{
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if(product){
            product.name = req.body.name;
            product.image = req.body.image;
            product.brand = req.body.brand;
            product.price = req.body.price;
            product.category = req.body.category;
            product.countInStock = req.body.countInStock;
            product.description = req.body.description;
            const updatedProduct = await product.save();
        if(updatedProduct){
            return res.status(200).send({message : "Product updated", data: updatedProduct});
        }
    } else{
        return res.status(500).send({message: "There is an error"});
    }
    
});


router.delete("/:id", async(req, res)=>{
    const deletedProduct = await Product.findById(req.params.id);
    if(deletedProduct){
        await deletedProduct.remove();
        res.send({message:"Product deleted"});
    } else {
        res.send({error:"There is an error"});
    }
})

export default router;
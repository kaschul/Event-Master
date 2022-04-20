import express from 'express'
import {getProducts, getProductById } from '../controllers/productController.js'

const router = express.Router()

// @desc    fetch all products
// @route   GET api/products
// @access  Public route
router.get('/', getProducts)

// @desc    fetch single product by id
// @route   GET api/products/:id
// @access  Public route
router.get('/:id', getProductById)


export default router
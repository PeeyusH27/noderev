const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json([
        {id: 1, name: 'Laptop', price: 45000},
        {id: 1, name: 'Phone', price: 15000}
    ])
})

router.get('/:id', (req, res) => {
    const id = Number(req.params.id)

    const products = [
        {id: 1, name: 'Laptop', price: 45000},
        {id: 1, name: 'Phone', price: 15000}
    ]

    const requestedProducts = products.find(product => product.id === id)
    res.json(requestedProducts)
})

router.post('/', (req, res) => {
    const {name, price} = req.body
    const newProduct = {
        name,
        price
    }
    console.log(newProduct);
    res.json({ message: "New product added: ", product: newProduct})
})

module.exports = router
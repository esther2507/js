const express = require("express")
const router = express.Router()
const Model = require("../models/Model")

router.post('/', async (req, res) => {
    try {
        const newModel = new Model(req.body)
        const saveModel = await newModel.save()
        res.status(201).json(saveModel)
    }
    catch (error){
        res.status(500).json({ message: error.message })
    }
})

router.get('/', async (req, res) => {
    try{
        const models= await Model.find()
        res.status(200).json(models)
    }  
    catch (error){
        res.status(500).json({ message: error.message })

    }      
})
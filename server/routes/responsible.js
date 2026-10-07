const express=require("express")
const router= express.Router()
const Responsible= require("../models/Responsible")

router.post('/', async (req, res) => {
    try {
        const newResponsible = new Responsible(req.body)
        const saveResponsible = await newResponsible.save()
        res.status(201).json(saveResponsible)
    }
    catch (error){
        res.status(500).json({ message: error.message })
    }
})

router.get('/', async (req, res) => {
    try{
        const responsible= await Responsible.find()
        res.status(200).json(responsible)
    }  
    catch (error){
        res.status(500).json({ message: error.message })

    }      
})
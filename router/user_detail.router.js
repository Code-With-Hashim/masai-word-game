const express = require('express')

const { userDetailModal } = require('../modals/user_detail.modals')

const userDetailRouter = express.Router()

userDetailRouter.post("/", async (req, res) => {

    const { level, name, score } = req.body

    try {

        await userDetailModal.create({ level, name, score })

        res.send({
            message: 'User Detail Successfully added',
            status: true
        })

    } catch (error) {
        console.log(error)
        res.status(404).send({
            message: 'Something went wrong , Please try again',
            status: false
        })
    }
})

userDetailRouter.get("/", async (req, res) => {
    try {

        const userDetailData = await userDetailModal.find()

        res.send(userDetailData)

    } catch (error) {
        console.log(error)
        res.status(404).send({
            message: 'Something went wrong , Please try again',
            status: false
        })
    }
})

module.exports = { userDetailRouter }
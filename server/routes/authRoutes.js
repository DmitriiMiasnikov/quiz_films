const { Router } = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const { check, validationResult } = require('express-validator')
const User = require('../models/User')
const router = Router()


// api/auth/registration
router.post(
    '/registration',
    [
        check('email', 'Incorrect email').isEmail(),
        check('password', 'Minimal length password is 6 symbols').isLength({ min: 6 })
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (errors.isEmpty()) {
                return res.json({
                    errors: errors.array(),
                    message: 'Incorrect data in registration'
                })
            }
            const { email, password } = req.body
            const candidate = await User.findOne({ email })
            if (candidate) {
                res.json({ message: 'this user already exists' })
            }
            const hashedPassword = await bcrypt.hash(password, 12)
            const user = new User({ email, password: hashedPassword })
            await user.save()

            res.status(201).json({ message: 'user has been created' })

        } catch (e) {
            res.status(500).json({ message: 'something wrong, try again' })
        }
    })


// api/auth/login
router.post(
    '/login',
    [
        check('email', 'Insert currect email').normalizeEmail().isEmail(),
        check('password', 'Insert password').exists()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (errors.isEmpty()) {
                return res.json({
                    errors: errors.array(),
                    message: 'Incorrect data in authorization'
                })
            }
            const {email, password} = req.body
            const user = await User.findOne({email})
            if (!user) {
                return res.json({message: 'User is not found'})
            }
            const isMatch = await bcrypt.compare(password, user.password)

            if (!isMatch) {
                return res.json({message: 'Password incorrect, try again'})
            }

            const token = jwt.sign(
                { userId:  user.id },
                config.get('jwtSecret'),
                { expiresIn: '1h' }
            )

            res.json({token, userId: user.id})

        } catch (e) {
            res.status(500).json({ message: 'something wrong, try again' })
        }
    })

module.exports = router
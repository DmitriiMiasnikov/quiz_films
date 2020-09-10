const { Router } = require('express')
const router = Router()
const quizJson = require('./../quiz/quiz.json')

// api/quiz/getAll
router.get(
    '/getAll',
    async (req, res) => {
        try {
            const quiz = quizJson['quiz']
            res.status(200).json({quiz})
        } catch(e) {
            console.log('something wrong')
        }
    }
)

module.exports = router
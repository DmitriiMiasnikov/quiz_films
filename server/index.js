const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()
app.use(express.json({ extended: true }))
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/api/auth', require('./routes/authRoutes'))
app.use('/api/quiz', require('./routes/quizRoutes'))

const start = async () => {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(config.get('port'),
            () => console.log(`server has been started in ${config.get('port')} port...`))
    } catch (e) {
        console.log('server error', e.message)
        process.exit(1)
    }
}
start()
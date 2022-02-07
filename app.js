const express = require('express')
require('dotenv').config()
const Queue = require('bull');
const CHECKQ = new Queue('check_queue');
CHECKQ.process(1, (job, done) => {
    if (job.data.type === 'DEPOSI') {
        console.log('LINE NO.7', job.data)
        //   messageQ(job.data).then(result => {
        //     done(null, result);
        //   }).catch(er => {
        //     done(null, {
        //       success: false,
        //       message: 'MESSAGE Q ERROR'
        //     });
        //   });
    }
    console.log("type does not match")
})
// CHECKQ.on('completed', function (job, result) {
//     job.remove();
// });
// require('./db/mongoose')
// const userRouter = require('./routers/users')
// const taskRouter = require('./routers/task')

const app = express()
app.use(express.json())
// app.use(userRouter)
// app.use(taskRouter)

const router = new express.Router()
app.use(router)
module.exports = app
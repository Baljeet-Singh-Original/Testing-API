const express = require('express')
const connectDB = require('./config/db')
const path = require('path')

const app = express()
connectDB()

app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.send("Api is running "))

app.use('/api/users', require('./routers/api/users'))
app.use('/api/book', require('./routers/api/users'))
app.use('/api/auth', require('./routers/api/auth'))
app.use('/api/search', require('./routers/api/searchBus'))



if (!module.parent) {
    app.listen(process.env.PORT || 8000, () => {
      console.log("Server is listening on port 5000");
    });
  }



module.exports=app
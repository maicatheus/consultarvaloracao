const express = require("express")
const session = require('express-session')
const cors = require('cors')
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000
var path = require('path')
const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    )
    app.use(cors())
    next()
})


app.use(session({secret:'asuiod093ondfg'}))
app.use(bodyParser.urlencoded({extended:true}))

app.engine('html', require('ejs').renderFile)
app.set('view engine','html')
app.use('/css', express.static(path.join(__dirname, 'css')))
app.use('/js', express.static(path.join(__dirname, 'js')))
app.set('views', path.join(__dirname,'/views'))



app.get('/',(req, res)=>{
    res.render('index')
})

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Express server listening on port ${port}`)
})

const express = require("express")
const session = require('express-session')
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000
var path = require('path')
const app = express()


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

app.listen(port, ()=>{
    console.log(`Express server listening on port ${port}`)
})

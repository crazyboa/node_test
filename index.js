const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000
app.use(cors())
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/sound/:name', function (req, res) {
   const {name} = req.params
   console.log(name)
   if(name=="dog") {
     res.json({'sound':'멍멍'})
   } else if(name =="cat") {
     res.json({'sound':'야옹'})
   } else if(name =="pid") {
        res.json({'sound':'꿀꿀'})
   } else {
     res.json({'sound':'모름'})
   }
})
app.get('/dog', function (req, res) {
    res.json({'sound':'멍멍'})
  })
  app.get('/cat', function (req, res) {
    res.json({'sound':'야옹'})
  })  
app.listen(port,()=>{
    console.log(`app listening on port ${port}`)
})
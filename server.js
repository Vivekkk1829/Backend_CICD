const express = require('express')
const app = express()


app.get('/',(req,res)=>{
    res.send("Hello Kavyaa")
    console.log("End point hit")
})

const PORT=3000;
app.listen(PORT,()=>{
    console.log(`App running sucessfully on ${PORT}`)
})
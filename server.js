const express = require('express')
const app = express()


app.get('/',(req,res)=>{
    res.send("Hello Kavyaa and Vivek ")
    console.log("End point hit")
})

app.get('/VK',(req,res)=>{
    res.send("Hello Vivek and Kavyaa how are you")
})

const PORT=3000;
app.listen(PORT,()=>{
    console.log(`App running sucessfully on ${PORT}`)
})
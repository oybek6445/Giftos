const env = require('dotenv').config()
const app  = require("./middleware/app.js")
const ejs = require('ejs');
app.listen(process.env.PORT, ()=>{
    console.log(`Server ${process.env.PORT} da ishga tushdi`)
})

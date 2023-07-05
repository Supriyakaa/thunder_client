 const  express = require("express");
 const  app = express()
 const Port = 8000;


 app.get("/", (req,res) => {

    res.send("helllooooooo")
 })

app.listen(Port,() => {
     console.log(`listning to ${Port}`)

})
//  app.listen(8000)
dsvsdvcxcsd
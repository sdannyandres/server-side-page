const express = require('express');
const app = express()


app.set("view engine", "pug")
app.get("/template1", function(req, res){
    res.render("t1.pug", {
        title: "curso 2022",message: 'hola a todos desde pug'
    })
})

app.get("*", (req, res) => {
    res.redirect("/public/404.html")
})

app.get("/error", (req, res) => {
    throw new Error("se ha producido un error y no puede segur")
})

app.use((error, req,res,next)=>{
    res.status(500).send("error interno")}
)

app.listen(3344)
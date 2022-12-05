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

app.listen(3344)
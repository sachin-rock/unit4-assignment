const express = require("express");
const res = require("express/lib/response");

const app = express();

app.get("",function(req,res){
    res.send({name:"hello"})
});
app.get("/books",function(req,res){
    res.send([
        {
            name:"book1",
            date:"1st feb",
            published:"sach"
        },
        {
            name:"book1",
            date:"1st feb",
            published:"sach"
        },
        {
            name:"book1",
            date:"1st feb",
            published:"rash"
        },
        {
            name:"book1",
            date:"1st feb",
            published:"sach"
        }
    ])
})
app.listen(5000, () => {
    console.log("success")
})
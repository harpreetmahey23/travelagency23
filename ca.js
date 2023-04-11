const express=require('express')
const app=express();
const contact=require("./camodule")

app.get("/", function(req, res) { 
    res.send('<ul>\
    <li><a href="http://localhost:6500/Destination">Travel_Destination</a></li>\
    <li><a href="http://localhost:6500/Insurance">Travel Insurance</a></li>\
    <li><a href="http://localhost:6500/package">Travel package</a></li>\
    <li><a href="http://localhost:6500/Contact">Contact us</a></li>\
    <li><img src="https://images.moneycontrol.com/static-mcnews/2021/12/Travellers-illustration-by-Sundeep-Khanna.jpg?impolicy=website&width=770&height=431"></li>\
  </ul>'); 
  });

app.get("/Destination",function(req,res){
    res.send(contact.Destination())
    
});


app.get("/Insurance",function(req,res){
    res.send(contact.Insurance())
});


app.get("/package",function(req,res){
    res.send(contact.package())
});
app.get("/Contact",function(req,res){
    res.send(contact.contact())
});



app.listen(6500,function(){

    console.log("Server running on port 6500")
})
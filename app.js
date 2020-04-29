const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    
    let today = new Date();
    let currentDay = today.getDay();
    let day = "";

    if(currentDay === 0){
        day = "sunday";
    }else if(currentDay === 1){
        day = "monday";
    }else if(currentDay === 2){
        day = "tuesday";
    }else if(currentDay === 3){
        day = "wednesday";
    }else if(currentDay === 4){
        day = "thursday";
    }else if(currentDay === 5){
        day = "friday";
    }else if(currentDay === 6){
        day = "saturday";
    }else{
        day = "you made it out of time. Please take care of yourself by yourself. Good Luck!";
    }
    
    res.render("list", {kindOfDay: day}); 
});



app.listen(3000, function(){
    console.log("Server started on port 3000");
});
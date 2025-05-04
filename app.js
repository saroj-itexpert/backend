const express = require("express");
const app = express();
const bookRoute = require("./routes/bookRoute")
//const is better in this situation 

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
});
//ONLY GET requests can be handled by this method and by Browser
//TO TEST POST, PUT, DELETE requests we need to use Postman Software
//or any other API testing tool

app.get("/",(req,res)=>{
    res.json({
        message:"Hello World",
        status:200,
        data:{
            name:"John Doe",
            age:30,
            city:"New York"
        },
        success:true,
        error:false,
        timestamp:new Date().toISOString(),

    })  
})

app.get("/about",(req,res)=>{
    res.json({
        message:"This is the About page",
        status:200,
        success:true,
        error:false,
        timestamp:new Date().toISOString(),
    });
})

app.post("/contact",(req,res)=>{
    res.json({
        message:"This is a POST request to the Contact page",
        status:200,
        success:true,
        error:false,
        timestamp:new Date().toISOString(),
    });
});

app.get("/contact",(req,res)=>{
    res.json({
        message:"This is a POST request to the Contact page",
        status:200,
        success:true,
        error:false,
        timestamp:new Date().toISOString(),
    });
});

app.put("/employee",(req,res)=>{
    res.json({
        message:"This is a PUT request to the employee page",
        status:200,
        success:true,
        error:false,
        timestamp:new Date().toISOString(),
    });
});


require("./database/connection")
app.use(express.json())

//localhost:4000/api/ + /hello = localhost:4000/api/hello
app.use("/api",bookRoute)


// postgresql://postgres.andhicxkpvuuhlabgbsw:H@ck#r$@r0j49@aws-0-ap-south-1.pooler.supabase.com:6543/postgres


app.listen(4000, () => {
    console.log("Server is running on port 4000");
});



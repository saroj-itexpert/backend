const express = require("express");
const app = express();
const bookRoute = require("./routes/bookRoute")
const userRoute = require("./routes/userRoute")

require("./database/connection")
app.use(express.json())

//localhost:4000/api/ + /hello = localhost:4000/api/hello
app.use("",bookRoute)
app.use("",userRoute)


postgresql://postgres.andhicxkpvuuhlabgbsw:H@ck#r$@r0j49@aws-0-ap-south-1.pooler.supabase.com:6543/postgres


app.listen(4000, () => {
    console.log("Server is running on port 4000");
});



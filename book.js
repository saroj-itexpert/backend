const express = require("express");
const app = express();
const bookRoute = require("./routes/bookRoute")

require("./database/connection")
app.use(express.json())

//localhost:4000/api/ + /hello = localhost:4000/api/hello
app.use("",bookRoute)

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});



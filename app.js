const express = require("express");
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express();

// middlewares
app.use(express.json())
app.use(cors())
app.use(cookieParser())

//routes
const postRoute = require("./routes/post.routes")
const profilesRoute = require("./routes/profiles.routes")



app.use("/api", postRoute)
app.use("/api", profilesRoute)
module.exports=  app;
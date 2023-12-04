const express = require("express")
const cors = require("cors");
const bodyParser = require('body-parser')
class Server{
    constructor(){
        this.app = express();
        this.port = 80;
        this.userPath = "/api/users"
        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.app.use(cors());
        this.app.use(bodyParser.urlencoded({ extended: false }));           
        this.app.use(bodyParser.json())
        this.app.use(express.static("public"));
    }
    routes(){
        this.app.use(this.userPath, require("../routes/user"))
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log("This app run in port: ",this.port);
        })
    }
}
module.exports = Server
import express, {Application} from "express";
import router from "./router";

const APP: Application = express()

// middlewares
APP.use(express.json())
APP.use(express.urlencoded({extended: true}))

// routes
APP.use('/api', router)

export default APP

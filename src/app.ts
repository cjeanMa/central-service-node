import express, { Application } from 'express'
import routerRegistry from './adapter/registry/registry.routes';

const app:Application = express();

app.use(express.json())

app.use("/status", (req, res)=>{
    res.status(200).send("I'm working B|")
})

app.use("/registry", routerRegistry)

export default app;
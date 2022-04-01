import { Application } from "express";
import http from 'http'
import yenv from 'yenv'
import { IServerBootstrap } from "./bootstrap.interface";

const env = yenv()

export class ServerBootstrap implements IServerBootstrap{

    private app:Application;

    //constructor(private app:Application)
    constructor(app:Application){
        this.app = app
    }

    initialize(): Promise<any> {
        return new Promise((resolve, reject)=>{
                const server = http.createServer(this.app)
                server
                    .listen(env.PORT)
                    .on('listening', ()=>{
                        console.log(`the app is running in port ${env.PORT}`)
                        resolve(true)
                    })
                    .on('error', (err)=>{
                        console.log(err)
                        reject(err)
                    })
        })
    }

}
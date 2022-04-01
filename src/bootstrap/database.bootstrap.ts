import { IServerBootstrap } from "./bootstrap.interface";
import { connect } from 'mongoose'
import yenv from 'yenv'
import { Console } from "console";
const env = yenv();

export class DatabaseBootstrap implements IServerBootstrap {

    private user: String = env.DB.USER
    private password: String = env.DB.PASSWORD
    private database: String = env.DB.DATABASE
    private ip: String = env.DB.IP
    private port: String = env.DB.PORT

    async initialize(): Promise<any> {
        try {
            await connect(`mongodb://${this.user}:${this.password}@${this.ip}:${this.port}/${this.database}`);
            console.log("Database connection")
        } catch (error) {
            return error
        }
    }

}

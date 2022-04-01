import app from './app';
import { DatabaseBootstrap } from './bootstrap/database.bootstrap';
import { ServerBootstrap } from './bootstrap/server.bootstrap';

const serverBootstrap = new ServerBootstrap(app);
const databaseBootstrap = new DatabaseBootstrap();

const start = async () =>{
    try {
        await serverBootstrap.initialize()
        await databaseBootstrap.initialize()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start();
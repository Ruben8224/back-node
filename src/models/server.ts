import express, { Application } from 'express';
import RUser from '../routes/user';
import { User } from './user';

class Server{
    private app: Application;
    private port: String;

    constructor(){
        
        this.app = express();
        this.port = process.env.PORT || '3606';
        this.listen();
        this.midlewares();
        this.router();
        this.DBconnet();

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("This execute from port: " + this.port);
        })
    }

    router(){
        this.app.use(RUser);
    }

    midlewares(){
        this.app.use(express.json());
    }

    async DBconnet(){
        try {
            await  User.sync({force: true});
            console.log('the table for the User model was just (re)create!')
            console.log("Conexión Exitosa");
        } catch (error) {
            console.log("Error de conexion:", error);
        }
    }

}

export default Server
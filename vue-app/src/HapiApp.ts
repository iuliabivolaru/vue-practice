import { RegisterRoutes } from "./routes";
import * as Hapi from "hapi";
import DataAccess from './dataAccess/DataAccess';

class HapiApp {

    server!: Hapi.Server;

    public build(): void {
        this.server = new Hapi.Server({
            host: 'localhost',
            port: 3000
        });

        RegisterRoutes(this.server);
        DataAccess.connect();
        this.server.start();
    }
}

export default new HapiApp();

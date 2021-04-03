const express = require('express');
const config = require('../../config/index');

class ExpressServer {

    constructor() {
        this.app = express();
        this.port = config.port;

        this._middlewares();
    }

    middlewares() {
        app.use(express.json());
    }

    async start() {
        this.app.listen(this.port, (error)  => {
            if(error){
                console.log(err);
                process.exit(1);
                return;
            }
        });
    }
}

module.exports = ExpressServer;
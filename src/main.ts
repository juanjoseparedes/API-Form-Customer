import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import "reflect-metadata";
import { appConnection } from '../data.source'
import dotenv from 'dotenv';
import "reflect-metadata";
import 'colorts/lib/string';

// ingection of routers
import customerRouter from './routers/cliente.routers';

async function main() {
    // connect to database and initialize tables
    await appConnection.initialize();

    // set envairoment variabels
    dotenv.config({ path: __dirname + '.env' });
    const PORT: number = parseInt(process.env.PORT || '3400');
    const IPSERVER = process.env.IP || '127.0.0.1';

    // instance of express framework
    const app = express();

    // to understan the data coming form form
    app.use(express.urlencoded({extended: false}));
    app.use(express.json())

    // middleware
    app.use(morgan('dev'));
    app.use(cors());
 
    // router default
    app.use(customerRouter);

    // start the app
    app.listen(PORT, IPSERVER, () => {
        console.log(`Server listenig in PORT: ${PORT} by the IP Server: ${IPSERVER}`.red.bold)
    });
}

main();
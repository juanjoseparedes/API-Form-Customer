import { DataSource } from "typeorm";
import { Customer } from './src/entities/customer.entities';

export const appConnection = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "A.123456",
    database: "growsoftDB",
    synchronize: true,
    logging: true,
    entities: [Customer],
    subscribers: [],
    migrations: [],
})
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConnection = void 0;
const typeorm_1 = require("typeorm");
const customer_entities_1 = require("./src/entities/customer.entities");
exports.appConnection = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "A.123456",
    database: "growsoftDB",
    synchronize: true,
    logging: true,
    entities: [customer_entities_1.Customer],
    subscribers: [],
    migrations: [],
});
//# sourceMappingURL=data.source.js.map
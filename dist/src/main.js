"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
require("reflect-metadata");
const data_source_1 = require("../data.source");
const dotenv_1 = __importDefault(require("dotenv"));
require("reflect-metadata");
require("colorts/lib/string");
// ingection of routers
const cliente_routers_1 = __importDefault(require("./routers/cliente.routers"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // connect to database and initialize tables
        yield data_source_1.appConnection.initialize();
        // set envairoment variabels
        dotenv_1.default.config({ path: __dirname + '.env' });
        const PORT = parseInt(process.env.PORT || '3400');
        const IPSERVER = process.env.IP || '127.0.0.1';
        // instance of express framework
        const app = (0, express_1.default)();
        // middleware
        app.use((0, morgan_1.default)('dev'));
        app.use((0, cors_1.default)());
        app.use(express_1.default.json());
        // router default
        app.use(cliente_routers_1.default);
        // start the app
        app.listen(PORT, IPSERVER, () => {
            console.log(`Server listenig in PORT: ${PORT} by the IP Server: ${IPSERVER}`.red.bold);
        });
    });
}
main();
//# sourceMappingURL=main.js.map
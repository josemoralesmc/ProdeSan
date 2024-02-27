"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config/config"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
const corsOptions = {
    origin: 'http://localhost:3000', // Reemplaza esto con el origen de tu frontend
    credentials: true,
};
app.use((0, cors_1.default)(corsOptions));
app.listen(config_1.default.BACK_PORT, () => {
    console.log(`Server running in port: ${config_1.default.BACK_PORT}`);
});

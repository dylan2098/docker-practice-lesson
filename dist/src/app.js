"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    credentials: true,
}));
app.use((req, res, next) => {
    const delay = parseInt(process.env.DELAY || '0');
    setTimeout(next, delay);
});
app.use((0, morgan_1.default)('dev'));
app.use((0, helmet_1.default)());
app.use((0, compression_1.default)());
app.use(express_1.default.json());
require("./databases/mongodb");
// utf8
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/', routes_1.default);
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.code = 404;
    next(error);
});
// manage errors
app.use((error, req, res, next) => {
    return res.status(500).json({
        error: true,
        message: 'Internal Server Error'
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./src/app"));
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST;
const NODE_ENV = process.env.NODE_ENV;
app_1.default.listen(PORT, () => {
    console.log(`Server ${NODE_ENV} running on ${HOST}:${PORT}`);
});
//# sourceMappingURL=server.js.map
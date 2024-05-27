"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectString = process.env.MONGO_URL;
class Database {
    constructor() {
        this.connect();
    }
    connect() {
        console.log('connection string: ' + connectString);
        mongoose_1.default
            .connect(connectString)
            .then((_) => console.log('MongoDB: started successfully'))
            .catch((err) => console.log(`MongoDB: Error Connect!: ${err.message}`));
    }
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}
exports.default = Database.getInstance();
//# sourceMappingURL=index.js.map
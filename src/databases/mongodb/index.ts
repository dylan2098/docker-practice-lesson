import mongoose from "mongoose";
const connectString = process.env.MONGO_URI as string;

class Database {
  static instance: any;
  
  constructor() {
      this.connect();
  }

  connect(type = "mongodb") {
      if (1 === 1) {
          mongoose.set("debug", true);
          mongoose.set("debug", { color: true });
      }

      mongoose
          .connect(connectString)
          .then((_) =>
            console.log('call success')
          )
          .catch((err) => console.log(`Error Connect!`));
  }

  static getInstance() {
      if (!Database.instance) {
          Database.instance = new Database();
      }
      return Database.instance;
  }
}

export default Database.getInstance();
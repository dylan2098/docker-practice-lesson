import mongoose from "mongoose";
const connectString = process.env.MONGO_URL as string;

class Database {
  static instance: any;
  
  constructor() {
      this.connect();
  }

  connect() {

    console.log('connection string: ' + connectString);
      mongoose
          .connect(connectString)
          .then((_) =>
            console.log('MongoDB: started successfully')
          )
          .catch((err) => console.log(`MongoDB: Error Connect!: ${err.message}`));
  }

  static getInstance() {
      if (!Database.instance) {
          Database.instance = new Database();
      }
      return Database.instance;
  }
}

export default Database.getInstance();
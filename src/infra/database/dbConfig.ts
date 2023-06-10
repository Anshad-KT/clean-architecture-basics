
import mongoose, { ConnectOptions } from 'mongoose';

const connectionOptions: ConnectOptions = {
    
   
  };
  
  export const connectToDatabase = async (): Promise<void> => {
    try {
      await mongoose.connect('mongodb://localhost:27017/mydatabase', connectionOptions);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  };
  
  export default connectToDatabase;

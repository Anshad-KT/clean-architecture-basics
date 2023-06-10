import express from "express";
import { userRouter } from "./src/interfaces/routes/userRoutes";
import { errorHandler } from "./src/utils/errorHandler";
import connectToDatabase from './src/infra/database/dbConfig';

const app = express();
const PORT = 3000;

app.use(express.json());

// User routes
app.use("/", userRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


connectToDatabase()
  .then(() => {
    console.log("good one");
    
  })
  .catch((error) => {
    // Handle connection error
    console.error('Error connecting to MongoDB:', error);
  });

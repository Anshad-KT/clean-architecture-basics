// src/index.ts
import express from "express";
import { userController } from "./src/interfaces/controllers/userController";
import { errorHandler } from "./src/utils/errorHandler";

const app = express();
const PORT = 3000;

app.use(express.json());

// User routes
app.use("/", userController());

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

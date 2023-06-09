import express from "express";
import { userRouter } from "./src/interfaces/routes/userRoutes";
import { errorHandler } from "./src/utils/errorHandler";

const app = express();
const PORT = 3000;

app.use(express.json());

// User routes
app.use("/", userRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

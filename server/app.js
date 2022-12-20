import app from "./index.js";
import connectDB from "./db/exams.js";

connectDB(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(
        `Server is running on port ${process.env.PORT} and Connected to DB`
      )
    );
  })
  .catch((err) => console.log(err));

import * as dotenv from "dotenv";
dotenv.config();

import app from "./server";

const PORT = process.env.PORT || 5525;

app.listen(PORT, () => {
  console.log("hello on http://localhost:5525");
});

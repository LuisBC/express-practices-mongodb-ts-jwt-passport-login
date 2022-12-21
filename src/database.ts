import mongoose from "mongoose";
import config from "./config/config";

mongoose
  .set("strictQuery", true)
  .connect(config.DB.URI)
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.error(err));

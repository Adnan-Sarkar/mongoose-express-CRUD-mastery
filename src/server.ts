import mongoose from "mongoose";
import app from "./app";
import config from "./app/config/config";

async function main() {
  try {
    await mongoose.connect(config.db_url as string);

    app.listen(config.port, () => {
      console.log(`SERVER is listening to the PORT: ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();

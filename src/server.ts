import app from "./app";
import config from "./app/config/config";

app.listen(config.port, () => {
  console.log(`SERVER is listening to the PORT: ${config.port}`);
});

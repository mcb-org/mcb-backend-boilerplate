import app from "./app";
import { PORT } from "./config";

//port config
const port = Number(PORT);

//server config
app.listen(port, () => {
  console.log(`Server is running on url: http://localhost:${port} 🚀`);
});

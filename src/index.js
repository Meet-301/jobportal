import connectDatabase from "./db/db.js";
import dotenv from "dotenv";
import dns from "dns";
import app from "./app.js";
import { createServer } from "http";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const server = createServer(app);

dotenv.config({
    path: "./.env"
});

connectDatabase().then(() => {
    const port = process.env.PORT || 5000;

    server.listen(port, () => {
        console.log(`Server is listening at port: ${port}`);
    });
})
import express, {Express} from "express";
import cors from "cors";
import UserRoutes from "@/src/routes/UserRoutes";


const app: Express = express();
const port = process.env.WEBSERVICE_PORT || 3000;


app.use(cors());
app.use(express.json());
app.use('/users', UserRoutes)


app.listen(port, () => {
    console.log(`Facilita Api is running at http://localhost:${port}`);
});

export default app;
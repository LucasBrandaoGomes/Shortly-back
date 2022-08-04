
import express, { json } from "express"
import  cors  from "cors"
import dotenv from 'dotenv';
import signupRoute from './routes/signupRoute.js'

dotenv.config();
const app = express()

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(json());

app.use(signupRoute)

const PORT = process.env.PORT;
app.listen(PORT ,  () => console.log(`server running - port ${PORT}`));
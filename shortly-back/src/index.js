
import express, { json } from "express"
import  cors  from "cors"
import dotenv from 'dotenv';
import signupRoute from './routes/signupRoute.js'
import signinRoute from './routes/signinRoute.js'
import newUrlRoute from './routes/newUrlRoute.js'
import getUrlById from './routes/getUrlById.js'
import openShorUrlRoute from './routes/openShortUrlRoute.js'

dotenv.config();
const app = express()

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(json());

app.use(signupRoute)
app.use(signinRoute)
app.use(newUrlRoute)
app.use(getUrlById)
app.use(openShorUrlRoute)
const PORT = process.env.PORT;
app.listen(PORT ,  () => console.log(`server running - port ${PORT}`));
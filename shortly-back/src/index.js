
import express, { json } from "express"
import  cors  from "cors"
import dotenv from 'dotenv';
import signupRoute from './routes/signupRoute.js'
import signinRoute from './routes/signinRoute.js'
import newUrlRoute from './routes/newUrlRoute.js'
import getUrlById from './routes/getUrlByIdRoute.js'
import openShorUrlRoute from './routes/openShortUrlRoute.js'
import deleteUrlRoute from './routes/deleteUrlRoute.js'
import getUserInfoRoute from './routes/getUserInfoRoute.js'

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
app.use(deleteUrlRoute)
app.use(getUserInfoRoute)

const PORT = process.env.PORT;
app.listen(PORT ,  () => console.log(`server running - port ${PORT}`));
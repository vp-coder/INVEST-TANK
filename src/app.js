import cors from "cors";
import express, { json } from "express";
import "./db/mongoose.js";
import pitchRouter from './routers/pitch.js';
import offerRouter from './routers/offer.js'
const app = express();
const port = process.env.PORT || 27017;
app.use(json());
app.use(cors({
  origin: 'http://localhost:27017',
}))
app.use(pitchRouter);
app.use(offerRouter);
app.listen(port, () => {
  console.log("Server is up on port " + port);
});

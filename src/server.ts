import express, { Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import router from './app/router';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import path from 'path';
config();

const app = express();
const port: number = Number(process.env.PORT) as number || 80;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.urlencoded({ extended: true }));
const uri = `mongodb+srv://${process.env.MONGO__ADMIN}:${process.env.MONGO__PASS}@cluster0.ha0ln.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(uri)
    .then(() => console.log("connected"))
    .catch(err => console.log(err))



app.use("/api/v2", router)

app.use(globalErrorHandler)

app.get('/', (req: Request, res: Response) => {
    res.send('Portfolio server is running');
});

app.listen(port, () => console.log(`Listening on port ${port}`));

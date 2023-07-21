import express, { Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { config } from 'dotenv';
config();

const app = express();
const port: number = Number(process.env.PORT) as number || 80;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.MONGO__ADMIN}:${process.env.MONGO__PASS}@cluster0.ha0ln.mongodb.net/?retryWrites=true&w=majority`;

(async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB!');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
})();

app.get('/', (req: Request, res: Response) => {
    res.send('Portfolio server is running');
});

app.listen(port, () => console.log(`Listening on port ${port}`));

import express from 'express';
import Router from './config/router.js'
import { connectDb } from './db/helpers.js';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use('/api', Router);

async function startServer() {
    try {
        await connectDb();
        app.listen(PORT, () => console.log('app is listening on port',PORT))
    } catch(err) {
        console.log('SOMETHING WENT WRONNGGGG', err)
    }
}

startServer()




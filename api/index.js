import express from 'express';
import cors from 'cors'
import carsRouter from './routes/cars.js' 
import bookingsRouter from './routes/booking.js';
import userRouter from "./routes/user.js"

const app = express();
app.use(express.json());
app.use(cors(
    {
        origin: [''],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        Credentials: true

    }
));
app.use('/api/cars', carsRouter);
app.use('/api/bookings', bookingsRouter);
app.use('/api/users',userRouter );

const port = 8800; // Vercel hanterar PORT
app.listen(port, () => {
    console.log(`API working on port ${port}`);
});

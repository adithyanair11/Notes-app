import app from './app';
import env from './utils/validateEnv'
import mongoose from "mongoose";

const port = env.PORT;


mongoose.connect(env.MONOGO_CONNECTION_STRING)
.then(() => {
    console.log('mongoose connected');
    app.listen(port,() => {
        console.log(`server running on port ${port}`);
    });
})
.catch(console.error);

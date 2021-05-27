import express from 'express'
import mongoose from 'mongoose'
import config from 'config';

import router from './routes/index.js';

const PORT = config.get('serverPort');
const DB_URL = config.get('dbUrl');

const app = express()

app.use(express.json());
app.use('/api', router);


async function startApp () {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`));
  } catch (e) {
    console.log(e)
  }
}

startApp();

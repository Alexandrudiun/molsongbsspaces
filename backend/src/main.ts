import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const port = process.env.PORT;

mongoose.connect(process.env.MONGODB_URI || '')
.then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log(err);
});

app.get('/', (req, res) => {
  res.status(200).send({ message: "Hello peeps!" });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

import express from 'express';

const app = express();
const port = 4000
const msg = "server ON!";

app.use(express.json());

app.get('/', (req, res) => {
    return res.json({ message: 'Server ON!' })
})

app.listen(port, () => { console.log(msg) })
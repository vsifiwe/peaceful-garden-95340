import { Router } from 'express';

const app = Router();

app.get('/', (req, res) => {
    return res.status(200).send({
        message: 'YAY! Congratulations! Your first endpoint is working',
    });
});

export default app;

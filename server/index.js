
import express from 'express';
import postRoutes from './routes/posts.routes.js'
import { conectDB } from './db.js';

const app = express();
conectDB();

app.use(postRoutes);

app.listen(3050);
console.log(' Server listening on port 3050');

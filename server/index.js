
import { conectDB } from './db.js';
import {PORT} from './config.js';
import app from './app.js';


conectDB();


app.listen(PORT);
console.log(' Server listening on port', PORT);

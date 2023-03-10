//express code
import express from 'express';
import fileUpload from 'express-fileupload';
import postRoutes from './routes/posts.routes.js'

const app = express();

//MIDDLEWARE
app.use(express.json());
app.use(fileUpload({
    //src
    tempFileDir: './upload',
    //guarda en carpeta la imagen
    useTempFiles: true,
}));

//ROUTES
app.use(postRoutes);


export default app;
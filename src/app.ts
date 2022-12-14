import express,{json} from 'express';
import 'express-async-errors';
import cors from 'cors';
import router from './routes/router';
import errorHandler from './middlewares/errorHandler';



const app = express();
app.use(cors());
app.use(json());
app.use(router);
app.use(errorHandler);


app.use(router);

export default app
import express from 'express';
import 'express-async-errors';

import postRoutes from './src/routes/post.router';
import userRoutes from './src/routes/user.router';

const app = express();

app.use(express.json());

const PORT = 8000;

app
  .use('/posts', postRoutes)
  .use('/users', userRoutes)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});



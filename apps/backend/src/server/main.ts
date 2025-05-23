import express from 'express';
import 'reflect-metadata';
// import { AppDataSource } from './config/datasource';
// import { Request, Response } from 'express';
// import { createExpressMiddleware } from '@trpc/server/adapters/express';
// import { appRouter } from './trpc/router';
// import { createContext } from './trpc/context';
import { startStatusTestServer } from './smoke_tests/status-service.test';
import { startTaskTestServer } from './smoke_tests/task-service.test';
import { startAttachmentTestServer } from './smoke_tests/attachments-service.test';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

// const runApp = async () => {
//   const app = express();
//   // app.use(express.json());

//   // app.use('/trpc', createExpressMiddleware({ router: appRouter, createContext }))

//   // app.get('/tasks', async (req: Request, res: Response) => {
//   //   res.send({ message: 'Hello API' });
//   // });

//   app.listen(port, host, () => {
//     console.log(`[ ready ] http://${host}:${port}`);
//     startStatusTestServer();
//   });
// }

// // AppDataSource.initialize()
// //   .then(() => {
// //     runApp();
// //     console.log("Data source has been initialized!");
// //   })
// //   .catch((err) => {
// //     console.error("Error during data source initialization: ", err);
// //   });

const app = express();

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
  const b = true;

  if (!b) {
    startStatusTestServer();
    startTaskTestServer();
  }
  startAttachmentTestServer();

});
import express from "express";
export class ServerController {
  constructor() { }
  async init() {
    const expressApp = express();
    expressApp.set("view engine", "ejs");
    expressApp.set("views", "./src/web-server/client-side/ejs");
    expressApp.use("/js/", express.static("./src/web-server/client-side/react/dist/"))
    expressApp.get('/', async (req, res) => {
      res.render('index');
    });
    await new Promise<void>(resolve => {
      const server = expressApp.listen(50540, () => {
        const address = server.address();
        if (address != null && typeof address == "object") {
          console.log(`http://localhost:${address.port}/`);
          resolve();
        } else {
          throw new Error();
        }
      });
    });
  }
}

/**
 * Copyright (c) 2017-present, SPACE44.
 *
 * @format
 */

import * as dotenv from "dotenv/config";
import * as express from "express";
import * as next from "next";

const app = next({
  dev: process.env.NODE_ENV === "development",
  dir: process.env.NODE_ENV === "production" ? "./build/app" : "./src",
});

const handle = app.getRequestHandler();

// Beginn server setup
app.prepare()
.then(() => {
  const server = express();
  const port = process.env.PORT || 3000;

  server.get("*", (req, res) => handle(req, res));

  server.listen(port, (err: Error) => {
    if (err) {
      throw err;
    }

    const host = process.env.HOST_NAME || "localhost";

    // tslint:disable-next-line:no-console
    console.log(`> App ready on ${host}:${port}`);
    // tslint:disable-next-line:no-console
    console.log(`> GraphQL Ready on ${host}:${port}/${process.env.GRAPHQL_PATH}`);
    // tslint:disable-next-line:no-console
    console.log(`Dev: ${process.env.NODE_ENV === "development"}`);
  });
}).catch((ex) => {
  // tslint:disable-next-line:no-console
  console.error(ex.stack);
  process.exit(1);
});

export default app;

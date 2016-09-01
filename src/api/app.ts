import {apolloKoa} from "apollo-server";
import * as Koa from "koa";
import * as body from "koa-bodyparser";
import * as Router from "koa-router";

import schema from "./schema";

const app = new Koa();
const router = new Router();

app.use(body());

router.post("/graphql", apolloKoa({schema}));
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(process.env.API_PORT as number | 3030);

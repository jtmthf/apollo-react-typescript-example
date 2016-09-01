import ApolloClient, {createNetworkInterface} from "apollo-client";
import * as Koa from "koa";
import * as React from "react";
import {ApolloProvider} from "react-apollo";
import { getDataFromTree } from "react-apollo/server";
import {renderToStaticMarkup, renderToString} from "react-dom/server";
import {RouterContext, createMemoryHistory, match} from "react-router";

import Html from "./Html";
import createStore from "./redux/createStore";
import routes from "./routes";

const basePort = process.env.PORT || 3000;
const apiHost = `http://localhost:${basePort + 10}`;
const apiUrl = `${apiHost}/graphql`;

const app = new Koa();

app.use(ctx => {
  const history = createMemoryHistory(ctx.originalUrl);

  match({history, routes, location: ctx.originalUrl}, async (error, redirectLocation, renderProps) => {
    if (error) {
      ctx.status = 500;
    } else if (redirectLocation) {
      ctx.redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const client = new ApolloClient({
        networkInterface: createNetworkInterface(apiUrl, {
          credentials: "same-origin",
          headers: ctx.headers,
        }),
        ssrMode: true,
      });
      const store = createStore(client);

      const component = (
        <ApolloProvider store={store} client={client}>
          <RouterContext {...renderProps}/>
        </ApolloProvider>
      );

      const context = await getDataFromTree(component);
      const content = renderToString(component);

      const html = <Html content={content} state={context.store.getState()} />;
      ctx.body = `<!doctype html>\n${renderToStaticMarkup(html)}`;
    } else {
      ctx.status = 404;
      ctx.body = "Not found";
    }
  });
});

app.listen(process.env.PORT as number | 3000);

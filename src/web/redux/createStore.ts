import ApolloClient from "apollo-client";
import {Reducer, applyMiddleware, combineReducers, createStore} from "redux";

export default (client: ApolloClient) => (
  createStore(
    combineReducers({
      apollo: client.reducer() as Reducer<any>,
    }),
    applyMiddleware(client.middleware())
  )
);

import {RouteProps} from "react-router";

import * as HomeType from "./components/Home";

const props: RouteProps = {
  async getComponent (nextState, cb) {
    try {
      const {default: Home} = await System.import<typeof HomeType>("./components/Home");
      cb(null, Home);
    } catch (err) {
      cb(err);
    }
  },
};

export default props;

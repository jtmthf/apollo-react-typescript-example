import CoreLayout from "../layouts/CoreLayout/CoreLayout";
import Home from "./Home";

export const createRoutes = () => ({
  component: CoreLayout,
  indexRoute: Home,
  path: "/",
});

export default createRoutes;

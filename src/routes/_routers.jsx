import Page404 from "../pages/Page404/Page404";
import { adminRouters } from "./_adminRouters";
import { userRouters } from "./_userRoutes";

export const routers = [
  // ************* COMMON ROUTER ******************
  {
    path: "*",
    exact: true,
    name: "Error",
    permission: ["user", "admin"],
    component: Page404,
  },
  // *********** ADMIN ROUTERS ****************
  ...userRouters,
  // ************** USER ROUTERS *************
  ...adminRouters,
];

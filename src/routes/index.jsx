import { Route, Routes } from "react-router-dom";
import FrontPage from "./frontpage";
import Dashboard from "./dashboard";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/*" index element={<FrontPage />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default Routers;

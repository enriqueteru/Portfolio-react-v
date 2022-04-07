import { useState } from "react";

import { Routes, 
         Route } from "react-router-dom";

import { AdminRoutes, 
         PublicRoutes } from "./routes";

import NotFound404 from "./core/NotFound404";


function App() {
  const [adminRole, setAdminRole] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/*" element={<PublicRoutes />} />
        <Route path="/*" element={<NotFound404 />} />
        {adminRole && <Route path="/admin/*" element={<AdminRoutes />} />}
      </Routes>
    </>
  );
}

export default App;

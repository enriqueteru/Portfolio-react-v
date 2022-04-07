import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NotFound404 from "./core/NotFound404";
import AdminRoutes from "./routes/AdminRoutes";
import PublicRoutes from "./routes/PublicRoutes";

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

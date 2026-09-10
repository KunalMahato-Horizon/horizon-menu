import { Route } from "react-router-dom";

import CremeCafeMenu from "./creme-cafe/pages/Menu";

const ClientRoutes = (
  <>
    <Route
      path="/menu/creme-cafe"
      element={<CremeCafeMenu />}
    />
  </>
);

export default ClientRoutes;
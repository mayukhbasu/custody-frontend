import {SharedUi} from '@custody-mf/shared-ui';

import AppRoutes from "./components/AppRoutes";
import Navbar from "./components/Navbar";

const App = () => (
  <div>
    <Navbar />
    <div className="container mt-4">
      <SharedUi/>
      <AppRoutes />
    </div>
  </div>
);

export default App;
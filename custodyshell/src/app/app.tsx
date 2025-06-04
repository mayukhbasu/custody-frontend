import AppRoutes from "./components/AppRoutes";
import Navbar from "./components/Navbar";

const App = () => (
  <div>
    <Navbar />
    <div className="container mt-4">
      <AppRoutes />
    </div>
  </div>
);

export default App;
import AuthRoutes from "./Routes/AuthRoutes";
import DashboardRoutes from "./Routes/DashboardRoutes";
import MainRoutes from "./Routes/MainRoutes";

function App() {
  return (
    <div>
      <MainRoutes/>
      <AuthRoutes />
      <DashboardRoutes />
    </div>
  );
}

export default App;

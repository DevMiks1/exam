/** @format */

import Header from "./components/header/Header";
import AllRoutes from "./routes/AllRoutes";

const App = () => {
  return (
    <div className="h-min-[100vh] flex flex-col">
      <Header />
      <AllRoutes />
    </div>
  );
};

export default App;

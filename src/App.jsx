import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import routesNavMain from "./routes/routesNavMain";

function App() {
  return (
    <BrowserRouter >
      <Header />
      <Routes>
        {routesNavMain.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

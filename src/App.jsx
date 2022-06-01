import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import NavMain from "./components/navMain/NavMain";
import routesNavMain from "./routes/routesNavMain";


function App() {
  return (
    <BrowserRouter >
      <Header/>
      <NavMain/>
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

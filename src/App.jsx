import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Swiper from "./components/Swiper/Swiper";
import routesNavMain from "./routes/routesNavMain";


function App() {
  return (
    <BrowserRouter >
      <Header />
      {/* <Swiper/> */}
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

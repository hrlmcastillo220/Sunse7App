import {WelcomeView, LoginView, SignUpView, DashboardView} from '../src/views'
import { BrowserRouter, Routes, Route } from "react-router";
import PrivateRoute from "./routes/PrivateRoute";
function App() {


  return (
    <div className=" w-screen h-screen flex justify-center items-center bg-[url('./assets/representation-jesus.jpg')] bg-cover bg-center ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomeView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/signup" element={<SignUpView />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<DashboardView />} />
          </Route>
          <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

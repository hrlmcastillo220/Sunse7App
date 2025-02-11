import  FormLogin  from "../components/FormLogin";
import { Link } from "react-router";

const LoginView = () => {
  return (
    <div>
      <h2 className="text-center text-2xl p-6 font-medium">Iniciar Sesión</h2>
      <FormLogin />
      <p className="text-center pt-4 text-white">
        ¿No tienes una cuenta? <Link to="/signup">Registrate.</Link>
      </p>
    </div>
  );
};

export default LoginView;
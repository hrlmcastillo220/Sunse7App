import FormSignUp from "../components/FormSignUp"
import { Link } from "react-router"

const SignUpView = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center ">
      <h2 className="text-center text-4xl font-bold  pt-40 items-center">¡Registrate!</h2>
      <FormSignUp />
      <p className="text-center pt-3 text-white pb-8">
        ¿Ya tienes una cuenta? <Link to="/login">Iniciar Sesión.</Link>
      </p>
    </div>
  )
}

export default SignUpView
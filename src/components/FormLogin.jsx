import { useFormik } from "formik";
import { useNavigate } from "react-router";

const FormLogin = () => {
  const navigate = useNavigate();

  const USER = {
    email: "email@correo.com",
    password: "1234"
  };

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      if (values.email === USER.email && values.password === USER.password) {
        navigate("/dashboard"); // Redirige al dashboard si las credenciales son correctas
        localStorage.setItem("email", values.email);
        setTimeout(() => {
          localStorage.removeItem('email')
        }, 3000);
      } else {
        alert("Usuario no registrado"); // Muestra una alerta si las credenciales son incorrectas
      }
    }
  });

  return (
    <>
      <form onSubmit={handleSubmit} className="text-center">
        <input
          className="w-80 rounded-xs bg-gray-300  p-2 mb-3 block"
          type="email"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <input
          className="w-80 rounded-tr-xs bg-gray-300  bg-opacity-75  p-2 mb-3 block"
          type="password"
          placeholder="Password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-80 h-10 rounded-md bg-slate-800 text-white hover:bg-slate-700"
        >
          Ingresar
        </button>
      </form>
    </>
  );
};

export default FormLogin;
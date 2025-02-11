import {useFormik} from "formik";


const FormSignUp = () => {
  const {handleSubmit, handleChange, values} = useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        checkbox: false
      },
      onSubmit: (values) => {
        console.log(values)
      }
    })
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-center ">
        <form  action="" onSubmit={handleSubmit}>
          <input 
          className=" w-80 rounded-xs bg-gray-300 p-2 not-visited:mb-3 block" 
          type="text" 
          placeholder="Nombre Completo" 
          name="name" 
          value={values.name} 
          onChange={handleChange}/>
          
          <input 
          className=" w-80 rounded-xs bg-gray-300 p-2 mb-3 block" 
          type="email" 
          placeholder="Correo Electronico" 
          name="email" 
          value={values.email} 
          onChange={handleChange}/>

          <input 
          className=" w-80 rounded-xs bg-gray-300 p-2 mb-3 block" 
          type="password" 
          placeholder="Contraseña" 
          name="password" 
          value={values.password} 
          onChange={handleChange}/>
          
          <input 
          className=" w-80 rounded-xs bg-gray-300 p-2 mb-3 block " 
          type="password" 
          placeholder="Confirmar Contraseña" 
          name="confirmPassword" 
          value={values.confirmPassword} 
          onChange={handleChange}/>

          <div className="flex justify-center ">
          <input  
          className=" rounded-xs bg-gray-300 mr-2" 
          type="checkbox" 
          name="checkbox" 
          value={values.checkbox} 
          onChange={handleChange}
          />
          <label  htmlFor="checkbox">Acepto los terminos y condiciones.</label>
          </div>
          <button className="w-40 h-10 rounded-md bg-slate-800 text-white hover:bg-slate-900 mt-3">Registrarse</button>
        </form>
    </div>
  )
}

export default FormSignUp
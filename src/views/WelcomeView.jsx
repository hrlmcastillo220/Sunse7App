import { NavLink } from "react-router"  

const WelcomeView = () => {
  return (
    <div className="flex flex-col justify-between items-center h-screen">
      <header className="text-center pt-30">
        <p className="text-4xl font-bold">LOGO</p>
        <p className="text-lg italic">Y yo los haré descansar.</p>
        <p className="text-sm pb-3">Mateo 11:29</p>
      </header>
      <footer className="flex flex-col justify-center items-center pb-10 px-4 text-white">
        <h2 className="text-center text-2xl font-medium px-5">¿Listo para descansar en Dios?</h2>
        <p className="text-center  text-white pb-8">Empecemos juntos una nueva experiencia espiritual.</p>
          <NavLink to={"/login"}>
            <button type="button" className="p-4 block w-80  rounded-full bg-slate-900 text-white mb-3 hover:bg-slate-800">Login</button>
          </NavLink>
          <NavLink to={"/signup"}>
            <button type="button" className=" p-4 block w-80 rounded-full bg-slate-900 text-white mb-3 hover:bg-slate-800">Sign Up</button>
          </NavLink>
          <p className="text-sm text-white">¿Ya tienes una cuenta?</p>
      </footer>
    </div>
  )
}

export default WelcomeView
import PropTypes from 'prop-types';

const ViewInfo = ({ user, dia, fecha, hora, puestaDeSol, cita, versiculo, handleClick}) => {
  return (
    <div className='text-center'>
      <img className='w-32 m-auto' src="../../src/assets/sun-cloud-1.svg" alt="" />
      <h2 className='text-3xl font-bold pb-4'>Bienvenido, {user}</h2>
      <div>
        <div className="flex justify-center items-center  py-6 bg-amber-50/60 mx-18 rounded-2xl mb-4">
          <div className="text-center">
            <p>Puesta de sol:</p>
            <d5iv className='mb-4 font-bold text-5xl'>{puestaDeSol}</d5iv>
          </div>
          <div className="text-left pl-6">
            <div className='mb-2'>{fecha}</div>
            <div className='mb-2 font'>{hora}</div>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
      <p className='text-xs mb-4 px-20  text-white'>{versiculo}
        <span> {cita}</span>
      </p>
        <button onClick={handleClick} type="button" className=" p-4 block w-40 rounded-full bg-white/0 border border-white text-white mb-3 hover:bg-slate-800">Compartir</button>
      </div>
    </div>
  )
}

ViewInfo.propTypes = {
  user: PropTypes.string.isRequired,
  dia: PropTypes.number.isRequired,
  fecha: PropTypes.string.isRequired,
  hora: PropTypes.string.isRequired,
  puestaDeSol: PropTypes.string.isRequired,
  cita: PropTypes.string.isRequired,
  versiculo: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleCerrarSesion: PropTypes.func.isRequired
}

export default ViewInfo;

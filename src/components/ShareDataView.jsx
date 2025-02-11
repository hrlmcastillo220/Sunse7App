import { useRef } from 'react';
import domtoimage from "dom-to-image";
import PropTypes from 'prop-types';

const ShareDataView  = ({ fecha, hora, dia, puestaDeSol, versiculo, cita}) => {
  const divRef = useRef(null);


  const handleCaptureClick = () => {
    if (!divRef.current) return;

    domtoimage
      .toPng(divRef.current)
      .then((dataUrl) => {
        // Crear un enlace para descargar la imagen
        const link = document.createElement("a");
        link.download = "captura.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((error) => {
        console.error("Error al capturar el div:", error);
      });
  };

  return (
    <>
    <div className='text-center w-[540px] h-[960px] bg-[url(./assets/representation-jesus.jpg)] bg-cover bg-center ' ref={divRef}>
    <img className='w-32 m-auto' src="../../src/assets/sun-cloud-1.svg" alt="" />
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
      <button type="button" className=" p-4 block w-40 rounded-full bg-white/0 border border-white text-white mb-3 hover:bg-slate-800" onClick={handleCaptureClick}>Descargar</button>
    </div>
  </div>
      </>
  );
};

ShareDataView.propTypes = {
  fecha: PropTypes.string.isRequired,
  hora: PropTypes.string.isRequired,
  dia: PropTypes.string.isRequired,
  puestaDeSol: PropTypes.string.isRequired,
  versiculo: PropTypes.string.isRequired,
  cita: PropTypes.string.isRequired
};

export default ShareDataView;
import SolDataDo from '../../public/data_sol.json';
import { useState } from "react";
import ShareInfo from "../components/ShareDataView";
import dataBible from '../../public/data_bible.json';
import useFetch from "../utils/useFetch";
import useTemporal from '../utils/useTemporal';
import ViewInfo from '../components/ViewInfo';

const user = "Harlem";
const Dashboard = () => {
  const [ shareIsClicked, setShareIsClicked ] = useState(false);
  const { loading, error } = useFetch(SolDataDo);
  const { temporalInfo } = useTemporal();

  const { nombreDia, fullFecha, fullHora, numDia, nombreMes, numMes } = temporalInfo;

  console.log(nombreMes());
  
  const puestaDeSol = SolDataDo[ nombreMes() ][ numDia - 1 ].atardecer;
  const obtenerVersiculoAleatorio = () => {
    const versiculos = dataBible;
    const indiceAleatorio = Math.floor(Math.random() * versiculos.length);
    return versiculos[ indiceAleatorio ];
  };

  const promesaBiblica = obtenerVersiculoAleatorio()

  return (
    (!shareIsClicked ?
      (<ViewInfo 
        user={user} 
        fecha={fullFecha} 
        hora={fullHora} 
        puestaDeSol={puestaDeSol} 
        cita={promesaBiblica.citaBiblica} 
        versiculo={promesaBiblica.textoDelVersiculo} 
        handleClick={() => setShareIsClicked(true)}/>) : 
        
        <ShareInfo 
        fecha={fullFecha} 
        hora={fullHora} 
        dia={nombreDia} 
        puestaDeSol={puestaDeSol} 
        versiculo={promesaBiblica.textoDelVersiculo} 
        cita={promesaBiblica.citaBiblica} 
        handleCerrarSesion={() => setShareIsClicked(false)} />
    )
  );
};

export default Dashboard;
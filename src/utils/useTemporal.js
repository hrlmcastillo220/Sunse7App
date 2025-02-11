
import { Temporal } from "@js-temporal/polyfill";

const semana = [ 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo' ];
const meses = [ 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre' ];


const useTemporal = () => {
  const tiempoActual = Temporal.Now.zonedDateTimeISO();

  const temporalInfo = {
    tiempo: tiempoActual,
    numDia: tiempoActual.day,
    numMes: tiempoActual.month,
    numYear: tiempoActual.year,
    hora: tiempoActual.hour, 
    minuto: tiempoActual.minute,
    segundo: tiempoActual.second,
    nombreDia: () => semana[ tiempoActual.dayOfWeek - 1 ],
    nombreMes: () => meses[ tiempoActual.month - 1 ],
    fullFecha: `${tiempoActual.day} ${meses[tiempoActual.month - 1]} ${tiempoActual.year}`,
    fullHora: `${tiempoActual.hour}:${tiempoActual.minute}:${tiempoActual.second}`,
  };

  return { temporalInfo };
}

export default useTemporal;
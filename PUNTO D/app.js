/*Ejercico 1: Calculadora de gastos de viaje Un grupo de amigos realiza un 
viaje con los siguientes costos fijos:
• Transporte: $120.000
• Alojamiento: $200.000
• Alimentación: $150.000 */

const TRANSPORTE = 120000;
const ALOJAMIENTO = 200000;
const ALIMENTACION = 150000;
const PERSONAS = 4;

let total = TRANSPORTE + ALOJAMIENTO + ALIMENTACION;
let aporteIndividual = total / PERSONAS;
let entrega = 130000;
let sobrante = entrega - aporteIndividual;

alert("Gastos del viaje:\n" +
      "Transporte: $" + TRANSPORTE.toLocaleString() + "\n" +
      "Alojamiento: $" + ALOJAMIENTO.toLocaleString() + "\n" +
      "Alimentación: $" + ALIMENTACION.toLocaleString() + "\n" +
      "-----------------------------------\n" +
      "Total: $" + total.toLocaleString() + "\n" +
      "Cada persona debe aportar: $" + aporteIndividual.toLocaleString() + "\n" +
      "Cada persona entrega: $" + entrega.toLocaleString() + "\n" +
      "Sobrante por persona: $" + sobrante.toLocaleString());

/*Ejercicio 2: Conversor de tiempo Un aprendiz registró 7.200 segundos de actividad física. 
Necesita expresarlos en:
• Minutos.
• Horas.
• Días.
Requerimiento:
• Usa una constante para los segundos.
• Declara variables para almacenar las conversiones. */

const SEGUNDOS = 7200;

let minutos = SEGUNDOS / 60;
let horas = SEGUNDOS / 3600;
let dias = SEGUNDOS / 86400;

alert("Conversión de tiempo:\n" +
      SEGUNDOS + " segundos equivalen a:\n" +
      minutos + " minutos\n" +
      horas + " horas\n" +
      dias + " días");

/* Ejercicio 3: Producción de una fábrica Una máquina produce 250 piezas por hora. 
En 8 horas de trabajo se necesita calcular:
• El total de piezas fabricadas.
• Cuántas cajas de 12 piezas se llenan.
• Cuántas piezas quedan sueltas.
Requerimiento:
• Usa constantes para la producción por hora, las horas trabajadas y la capacidad de las cajas.
• Usa variables para el total de piezas, cajas llenas y piezas sobrantes.*/

const PRODUCCION_POR_HORA = 250;
const HORAS_TRABAJADAS = 8;
const CAPACIDAD_CAJA = 12;

let totalPiezas = PRODUCCION_POR_HORA * HORAS_TRABAJADAS;
let cajasLlenas = Math.floor(totalPiezas / CAPACIDAD_CAJA);
let piezasSobrantes = totalPiezas % CAPACIDAD_CAJA;

alert("Producción de la fábrica:\n" +
      "Total de piezas fabricadas: " + totalPiezas + "\n" +
      "Cajas llenas (12 piezas c/u): " + cajasLlenas + "\n" +
      "Piezas sobrantes: " + piezasSobrantes);






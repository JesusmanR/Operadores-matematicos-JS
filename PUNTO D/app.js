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






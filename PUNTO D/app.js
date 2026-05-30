/*Ejercico 1: Calculadora de gastos de viaje Un grupo de amigos realiza un 
viaje con los siguientes costos fijos:
• Transporte: $120.000
• Alojamiento: $200.000
• Alimentación: $150.000 */

let transporte = 120000;
let alojamiento = 200000;
let alimentacion = 150000;
let total = transporte + alojamiento + alimentacion;
alert("Gastos del viaje:\n" +
      "Transporte: $" + transporte.toLocaleString() + "\n" +
      "Alojamiento: $" + alojamiento.toLocaleString() + "\n" +
      "Alimentación: $" + alimentacion.toLocaleString() + "\n" +
      "-----------------------------\n" +
      "Total: $" + total.toLocaleString());


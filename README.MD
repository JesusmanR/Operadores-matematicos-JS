# 📘 Operadores Matemáticos en JavaScript
**Programa:** Tecnología en Análisis y Desarrollo de Software — SENA  
**Repositorio:** `operadores-apropiacion-js`  
**Formato:** GFPI-F-135 V04

---

## 🗂️ Estructura del repositorio

```
📁 operadores-apropiacion-js/
├── 📁 apropiacion/
│   ├── 01_terreno_rectangular.js
│   ├── 02_tres_notas.js
│   ├── 03_contador_visitas.js
│   └── 04_operacion_misteriosa.js
├── 📁 transferencia/
│   ├── 01_gastos_viaje.js
│   ├── 02_conversor_tiempo.js
│   ├── 03_produccion_fabrica.js
│   └── 04_estadisticas_notas.js
└── README.md
```

---


## C. Apropiación del Conocimiento

Ejercicios prácticos sobre **operadores aritméticos**, **operadores de asignación** y **precedencia de operadores** en JavaScript.

### Ejercicio 1 — El terreno rectangular
Un agricultor conoce la base y la altura de su terreno en metros. El programa calcula el **área** y el **perímetro** para cercarlo y sembrar.

- Entrada: base y altura (metros)
- Salida: área en m² y perímetro en m
- Fórmulas: `área = base × altura` | `perímetro = 2 × (base + altura)`

### Ejercicio 2 — Las tres notas del estudiante
Un aprendiz obtuvo tres notas en sus evaluaciones. El programa calcula el **promedio** para conocer su desempeño en la asignatura.

- Entrada: tres calificaciones numéricas
- Salida: promedio con dos decimales
- Fórmula: `promedio = (nota1 + nota2 + nota3) / 3`

### Ejercicio 3 — El contador de visitas
Un sitio web inicia con **100 visitas**. Durante el día: recibe 25 adicionales, pierde 10 por un error, y finalmente las visitas se duplican. El programa representa cada cambio con **operadores de asignación compuesta**.

- Sin entrada del usuario (valores fijos en el código)
- Salida: valor final del contador
- Operadores usados: `+=`, `-=`, `*=`

### Ejercicio 4 — La operación misteriosa
Se implementa la expresión `(20 + 10) / 5 + 3 * 2 - 4` y se analiza **paso a paso** el orden de ejecución según la precedencia de operadores.

- Sin entrada del usuario
- Salida: resultado final y análisis por pasos
- Resultado esperado: `8`

---

## D. Transferencia del Conocimiento

Miniproyectos aplicados a situaciones reales usando `const` para datos fijos y `let` para resultados calculados.

### Ejercicio 1 — Calculadora de gastos de viaje
Un grupo de 4 amigos viaja con costos fijos: transporte $120.000, alojamiento $200.000 y alimentación $150.000. Cada persona aporta $130.000.

- Calcula: total del viaje, costo por persona y dinero sobrante
- Usa `const` para los costos y número de personas
- Usa `let` para total, costo individual y sobrante

### Ejercicio 2 — Conversor de tiempo
Un aprendiz registró **7.200 segundos** de actividad física. El programa los convierte a minutos, horas y días.

- Usa `const` para los segundos totales
- Usa `let` para cada conversión resultante

### Ejercicio 3 — Producción de una fábrica
Una máquina produce **250 piezas por hora** durante **8 horas**. Las piezas se empacan en cajas de **12 unidades**.

- Calcula: total de piezas, cajas completas y piezas sobrantes
- Usa `const` para producción/hora, horas y capacidad de caja
- Usa `let` para los tres resultados

### Ejercicio 4 — Estadísticas de calificaciones
Un aprendiz obtuvo las notas: **4.5, 3.8, 2.9 y 4.0**. El programa calcula la suma, el promedio y el resultado de la expresión `(nota1 + nota2) * (nota3 + nota4) / 2`.

- Declara cada nota como `const`
- Usa `let` para suma, promedio y resultado de la expresión

---

## 📚 Conceptos aplicados

| Concepto | Descripción | Ejemplo |
|---|---|---|
| `let` | Variable: su valor puede cambiar | `let total = 0;` |
| `const` | Constante: su valor no cambia | `const IVA = 0.19;` |
| `+` `-` `*` `/` | Operadores aritméticos básicos | `let area = base * altura;` |
| `%` | Módulo: residuo de una división | `let resto = 17 % 5;` |
| `+=` `-=` `*=` | Operadores de asignación compuesta | `contador += 25;` |
| `++` | Incremento en 1 | `vidas++;` |
| `Math.floor()` | Redondea hacia abajo | `Math.floor(2000 / 12)` |
| `toFixed(n)` | Fija n decimales en la salida | `promedio.toFixed(2)` |
| Precedencia | `()` → `* /` → `+ -` | `(2+3)*4 = 20` vs `2+3*4 = 14` |

---

## 🛠️ Herramientas utilizadas

| Herramienta | Uso |
|---|---|
| Visual Studio Code | Editor de código |
| Navegador web + DevTools | Ejecución y depuración |
| Git / GitHub | Control de versiones y entrega |

---

## 📋 Evidencias de aprendizaje

- [x] Sección A: Reflexión inicial con mural y preguntas orientadoras respondidas
- [x] Sección B: Tabla de contextualización completada con situaciones propias
- [] Sección C: 4 archivos `.js` con comentarios y diagramas de flujo
- [] Sección D: 4 miniproyectos `.js` usando `const` y `let` correctamente
- [] Commits descriptivos en GitHub por cada ejercicio

---

## 🏫 Información académica

**Institución:** SENA  
**Programa:** Tecnología en Análisis y Desarrollo de Software — Código 3234206  
**Actividad:** Introducción a los operadores matemáticos  
**Instructor:** John Freddy Becerra Castellanos  
**Formato:** GFPI-F-135 V04
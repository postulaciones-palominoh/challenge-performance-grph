# 🔍 Reto de Performance Monnet

Este proyecto incluye el análisis y la ejecución de pruebas de performance sobre un sistema e-commerce, contemplando tanto la justificación técnica (Parte 1) como la implementación práctica con K6 (Parte 2).

---

## 🧩 Parte 1 – Análisis de Pruebas de Performance

### 🛍️ Contexto

Una tienda e-commerce maneja aproximadamente **1500 ventas por día**. En fechas especiales como **Black Friday o Navidad**, el tráfico se **quintuplica (7500 ventas/día)**.

### ✅ Pruebas más oportunas a realizar

| Tipo de prueba        | Objetivo principal                                                                 | Métricas clave                             |
|-----------------------|------------------------------------------------------------------------------------|--------------------------------------------|
| **Load Testing**      | Validar que el sistema soporte la carga habitual y picos esperados (1–5 TPS)      | Tiempos de respuesta, tasa de errores      |
| **Stress Testing**    | Determinar el punto de quiebre del sistema bajo alta demanda                      | Máximo TPS, errores, saturación de CPU     |
| **Scalability Testing** | Validar la capacidad del sistema de escalar bajo carga progresiva               | Tiempos al aumentar TPS                    |
| **Soak Testing**      | Evaluar estabilidad bajo carga sostenida en el tiempo                             | Fugas de memoria, degradación progresiva   |
| **Concurrency Testing**| Verificar consistencia al ejecutar muchas acciones simultáneamente               | Condiciones de carrera, bloqueos           |
| **Checkout Endpoint** | Validar flujo crítico de compra/pago en alta concurrencia                         | Disponibilidad, errores funcionales        |

Puedes encontrar mucho mas contexto en el archivo Parte 01\Parte 01 - Challenge Performance.pdf

## 🧪 Parte 2 – Ejecución con K6

Todo este detalle lo encuentras en Parte 02\K6
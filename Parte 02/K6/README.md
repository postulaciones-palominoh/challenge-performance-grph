# 🔍 Reto de Performance Monnet – K6

Este proyecto evalúa el comportamiento del endpoint `POST /products/add` bajo 50 y 100 TPS durante un minuto.

## 🔧 Instalación

Requiere tener Node.js y K6:

```bash
# Instalar k6
brew install k6 # Mac
choco install k6 # Windows
```

## ▶️ Ejecución

Para ejecutar abre el terminal en la siguiente ruta Parte 02\K6

```bash
k6 run script/add-product-test.js
```
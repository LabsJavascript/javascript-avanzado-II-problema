# Calculadora Manual en JavaScript

## Descripción General

El programa se divide en tres partes principales:

1. **Conversión de Infijo a Postfijo** (`toPostfix`)
2. **Evaluación de Expresión Postfija** (`evaluatePostfix`)
3. **Función Principal** (`calculate`)

## Conversión de Infijo a Postfijo (`toPostfix`)

El primer paso es convertir la expresión infija dada (p. ej., 2 + 3 _ 4) en una expresión postfija (p. ej., 2 3 4 _ +). La notación postfija es más fácil de evaluar porque no requiere que tengamos en cuenta la precedencia de los operadores o los paréntesis; simplemente evaluamos de izquierda a derecha.

### Variables

- `output`: Una lista para almacenar la notación postfija.
- `operators`: Una pila para almacenar operadores temporalmente.
- `precedence`: Un diccionario para la precedencia de operadores.

Luego iteramos sobre los tokens de la expresión infija. Los tokens pueden ser operadores (+, -, ×, ÷) u operandos (números). Si el token es un número, lo añadimos a `output`. Si es un operador, lo añadimos a `operators` después de vaciar `operators` en `output` según la precedencia.

### Algoritmo

1. Iteramos sobre cada token de la expresión infija.
   - Si es un número, lo añadimos a `output`.
   - Si es un operador, vaciamos `operators` en `output` según la precedencia, y luego añadimos el operador actual a `operators`.

## Evaluación de Expresión Postfija (`evaluatePostfix`)

Una vez que tenemos una expresión postfija, evaluarla es sencillo. Utilizamos una pila (stack) para hacer un seguimiento de los operandos. Cuando encontramos un número, lo apilamos. Cuando encontramos un operador, desapilamos los dos números superiores, realizamos la operación y apilamos el resultado.

### Variables

- `stack`: Una pila para almacenar números temporalmente.

### Algoritmo

1. Iteramos sobre cada token de la expresión postfija.
   - Si es un número, lo apilamos en `stack`.
   - Si es un operador, desapilamos los dos números superiores, realizamos la operación y apilamos el resultado.

## Función Principal (`calculate`)

Esta función primero convierte la expresión infija a postfija usando `toPostfix` y luego la evalúa usando `evaluatePostfix`.

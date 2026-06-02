let intento = 1
let ciclo = 1
const maximoIntentos = 

if(maximoIntentos < 1)  {
  console.log("El número máximo de interntos debe ser al menos 1")
}

console.log("Práctica inicial con while")
console.log("Vamos a repetir un proceso mientras el intento sea menor o igual al máximo.")

while (intento <= maximoIntentos) {
  console.log("Intento de revisión número:", intento, "Ciclo número:" , ciclo)
  intento = intento + 1
  ciclo = ciclo + 1
}

console.log("Proceso de revisión finalizado.")

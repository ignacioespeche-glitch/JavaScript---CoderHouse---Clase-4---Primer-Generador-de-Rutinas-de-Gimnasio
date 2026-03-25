function generarRutina(dias) {

  for (let i = 1; i <= dias; i++) {

    if (dias == 3) {

      if (i == 1) {
        console.log("Día 1: Full Body (Pecho + Espalda + Piernas)")
      } else if (i == 2) {
        console.log("Día 2: Descanso o Cardio")
      } else if (i == 3) {
        console.log("Día 3: Full Body (Hombros + Brazos)")
      }

    } 

    else if (dias == 4) {

      if (i == 1) {
        console.log("Día 1: Upper (Pecho + Espalda + Hombros)")
      } else if (i == 2) {
        console.log("Día 2: Lower (Piernas enfocado en cuadriceps)")
      } else if (i == 3) {
        console.log("Día 3: Upper (Espalda + Pecho + Brazos)")
      } else if (i == 4) {
        console.log("Día 4: Lower (Piernas enfocado en femorales)")
      }

    } 

    else if (dias == 5) {

      if (i == 1) {
        console.log("Día 1: Push (Pecho + Hombros + Tríceps)")
      } else if (i == 2) {
        console.log("Día 2: Pull (Espalda + Bíceps)")
      } else if (i == 3) {
        console.log("Día 3: Piernas enfocadas en cuadriceps + hombros)")
      } else if (i == 4) {
        console.log("Día 4: Upper (Tren Superior)")
      } else if (i == 5) {
        console.log("Día 5: Piernas enfocadas en femorales + hombros")
      }

    } 

    else if (dias == 6) {

      if (i == 1) {
        console.log("Día 1: Piernas enfocada en cuadriceps + Hombros")
      } else if (i == 2) {
        console.log("Día 2: Pecho + Espalda")
      } else if (i == 3) {
        console.log("Día 3: Brazos + Hombros")
      } else if (i == 4) {
        console.log("Día 4: Piernas enfocada en femorales")
      } else if (i == 5) {
        console.log("Día 5: Espalda + Biceps")
      } else if (i == 6) {
        console.log("Día 6: Pecho + Hombro + Triceps")
      }

    } 

    else {
      console.log("No hay rutina para esa cantidad de días")
      break
    }

  }

}

let nombre = prompt("Ingresá tu nombre")
let dias = prompt("¿Cuántos días entrenás por semana?")

dias = Number(dias)

if (dias > 0) {
  generarRutina(dias)
  alert(nombre + ", tu rutina fue generada. Revisá la consola")
} else {
  alert("Ingresá un valor válido")
}
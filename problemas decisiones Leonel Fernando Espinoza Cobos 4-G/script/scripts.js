function verificarVoto() {
  const edad = parseInt(document.getElementById('edad').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(edad) || edad < 0) {
    resultado.textContent = 'Por favor ingresa una edad válida.';
  } else if (edad >= 18) {
    resultado.textContent = 'Puedes votar.';
  } else {
    resultado.textContent = 'No puedes votar.';
  }
}

function calcularSueldo() {
  const horas = parseFloat(document.getElementById('horas').value);
  const pago = parseFloat(document.getElementById('pago').value);
  let sueldo = 0;

  if (horas <= 40) {
    sueldo = horas * pago;
  } else {
    sueldo = 40 * pago + (horas - 40) * pago * 2;
  }
  document.getElementById('total').textContent = `Sueldo total: $${sueldo}`;
}

function elegirRegalo() {
      const p = parseFloat(document.getElementById("presupuesto").value);
      let regalo;
      if (p <= 10) regalo = "Tarjeta";
      else if (p <= 100) regalo = "Chocolates";
      else if (p <= 250) regalo = "Flores";
      else regalo = "Anillo";
      document.getElementById("resultado").innerText = `Puedes comprar: ${regalo}`;
    }

   function calcularEstacionamiento() {
      let h = parseInt(document.getElementById("horas").value);
      let total = 0;
      if (h <= 2) total = h * 5;
      else if (h <= 5) total = 2 * 5 + (h - 2) * 4;
      else if (h <= 10) total = 2 * 5 + 3 * 4 + (h - 5) * 3;
      else total = 2 * 5 + 3 * 4 + 5 * 3 + (h - 10) * 2;
      document.getElementById("resultado").innerText = `Total: $${total}`;
    }

function menorEdad() {
  let nombre1 = document.getElementById("n1").value;
  let edad1 = parseInt(document.getElementById("e1").value);
  let nombre2 = document.getElementById("n2").value;
  let edad2 = parseInt(document.getElementById("e2").value);
  let nombre3 = document.getElementById("n3").value;
  let edad3 = parseInt(document.getElementById("e3").value);
  let menorNombre, menorEdad;
  if (edad1 <= edad2 && edad1 <= edad3) {
    menorEdad = edad1;
    menorNombre = nombre1;
  } else if (edad2 <= edad1 && edad2 <= edad3) {
    menorEdad = edad2;
    menorNombre = nombre2;
  } else {
    menorEdad = edad3;
    menorNombre = nombre3;
  }
document.getElementById("resultado").innerText =
    `La persona menor es ${menorNombre} con ${menorEdad} años.`;
}

function calcularDescuento() {
  let precio = parseFloat(document.getElementById("precio").value);
  let desc;
  if (precio >= 200) {
    desc = 0.15;
  } else if (precio > 100) {
    desc = 0.12;
  } else {
    desc = 0.10;
  }
  let total = precio - precio * desc;
  document.getElementById("resultado").innerText = `Descuento: ${desc * 100}%. Total: $${total}`;
}

function calcularBeca() {
  const edad = parseInt(document.getElementById("edad").value);
  const promedio = parseFloat(document.getElementById("promedio").value);
  let mensaje = "";

  if (edad > 18) {
    if (promedio >= 9) {
      mensaje = "Beca asignada: $2000";
    } else if (promedio >= 7.5) {
      mensaje = "Beca asignada: $1000";
    } else if (promedio >= 6.0) {
      mensaje = "Beca asignada: $500";
    } else {
      mensaje = "Se enviará una carta de invitación para mejorar.";
    }
  } else {
    if (promedio >= 9) {
      mensaje = "Beca asignada: $3000";
    } else if (promedio >= 8) {
      mensaje = "Beca asignada: $2000";
    } else if (promedio >= 6) {
      mensaje = "Beca asignada: $100";
    } else {
      mensaje = "Se enviará una carta de invitación para mejorar.";
    }
  }

  document.getElementById("resultado").innerText = mensaje;
}

 function calcularBono() {
      const sueldo = parseFloat(document.getElementById("sueldo").value);
      const antiguedad = parseFloat(document.getElementById("antiguedad").value);
      let bonoAntiguedad = 0;
      let bonoSueldo = 0;
      if (antiguedad > 2 && antiguedad < 5) {
        bonoAntiguedad = sueldo * 0.20;
      } else if (antiguedad >= 5) {
        bonoAntiguedad = sueldo * 0.30;
      }
      if (sueldo < 1000) {
        bonoSueldo = sueldo * 0.25;
      } else if (sueldo <= 3500) {
        bonoSueldo = sueldo * 0.15;
      } else {
        bonoSueldo = sueldo * 0.10;
      }

      const bonoFinal = bonoAntiguedad > bonoSueldo ? bonoAntiguedad : bonoSueldo;
      document.getElementById("resultado").innerText = `El bono asignado es: $${bonoFinal}`;
    }
function calcularPoliza() {
      let tipo = document.getElementById("poliza").value;
      let alcohol = document.getElementById("alcohol").checked;
      let lentes = document.getElementById("lentes").checked;
      let enfermedad = document.getElementById("enfermedad").checked;
      let edad = parseInt(document.getElementById("edad").value);
      let costoBase = (tipo === "A") ? 1200 : 950;
      let cargo = 0;
      if (alcohol) {
        cargo += 0.10 * costoBase;
      }
      if (lentes) {
        cargo += 0.05 * costoBase;
      }
      if (enfermedad) {
        cargo += 0.05 * costoBase;
      }

      if (edad > 40) {
        cargo += 0.20 * costoBase;
      } else {
        cargo += 0.10 * costoBase;
      }
      let total = costoBase + cargo;
      document.getElementById("resultado").innerText = `El costo total es: $${total}`;
    }

     function calcularDestino() {
      const presupuesto = parseFloat(document.getElementById("presupuesto").value);
      const tarifaKm = 1.5;

      const destinos = {
        "Cancún": 1800 * 2 * tarifaKm,
        "Acapulco": 1200 * 2 * tarifaKm,
        "Puerto Vallarta": 800 * 2 * tarifaKm,
        "Ciudad de México": 750 * 2 * tarifaKm
      };

      let destino = "Casa";

      if (presupuesto >= destinos["Cancún"]) {
        destino = "Cancún";
      } else if (presupuesto >= destinos["Acapulco"]) {
        destino = "Acapulco";
      } else if (presupuesto >= destinos["Puerto Vallarta"]) {
        destino = "Puerto Vallarta";
      } else if (presupuesto >= destinos["Ciudad de México"]) {
        destino = "Ciudad de México";
      }

      document.getElementById("resultado").innerText = `Puedes viajar a: ${destino}`;
    }

    function calcularBono() {
      const años = parseInt(document.getElementById("antiguedad").value);
      let bono = 0;
      if (años >= 1 && años <= 5) {
        bono = años * 100;
      } else if (años > 5) {
        bono = 1000;
      }
      document.getElementById("resultado").innerText = `El bono a recibir es: $${bono}`;
    }
     function calcularSueldo() {
      const horas = parseInt(document.getElementById("horas").value);
      const pago = parseFloat(document.getElementById("pago").value);
      let sueldo = 0;
      if (horas > 50) {
        document.getElementById("resultado").innerText = "No se permite trabajar más de 50 horas.";
        return;
      }
      if (horas <= 40) {
        sueldo = horas * pago;
      } else if (horas <= 45) {
        sueldo = (40 * pago) + ((horas - 40) * pago * 2);
      } else {
        sueldo = (40 * pago) + (5 * pago * 2) + ((horas - 45) * pago * 3);
      }
      document.getElementById("resultado").innerText = `Sueldo semanal: $${sueldo}`;
    }

 function calcularCosto() {
      const alumnos = parseInt(document.getElementById("alumnos").value);
      let costo;
      if (alumnos > 100) {
        costo = 20;
      } else if (alumnos >= 50) {
        costo = 35;
      } else if (alumnos >= 20) {
        costo = 40;
      } else {
        costo = 70;
      }
      document.getElementById("resultado").innerText =
        `El costo por alumno es: $${costo}`;
    }
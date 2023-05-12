const ejercicios = ['sentadillas', 'bancos', 'peso muerto', 'prensas'];

function* rutina(semanas, dias) {
  for(let i = 0; i < semanas * dias; i++) {
    const ejercicio = ejercicios[Math.floor(Math.random() * ejercicios.length)];
    yield `Semana ${Math.floor(i/dias) + 1}, Dia ${i%dias + 1}: ${ejercicio}`;
  }
}

const mostrarRutina = () => {
  const semanas = parseInt(document.getElementById('semanas').value);
  const dias = parseInt(document.getElementById('dias').value);
  const rutinaGenerada = rutina(semanas, dias);
  let rutinaHTML = '<ul>';
  for(let ejercicio of rutinaGenerada) {
    rutinaHTML += `<li>${ejercicio}</li>`;
    console.log(ejercicio);
  }
  rutinaHTML += '</ul>';
  document.body.innerHTML += rutinaHTML;
}

document.getElementById('mostrar-rutina').addEventListener('click', mostrarRutina);

//Calculando a diferença entre dias
const hoje = moment();
const voltaAulas = moment("2026-03-16");
const diferencaDias = voltaAulas.diff(hoje, 'days');
document.getElementById("dias").innerHTML = diferencaDias;
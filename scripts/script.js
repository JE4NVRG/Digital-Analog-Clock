let is24HourMode = false; // Variável para rastrear o modo atual

document.getElementById("toggleButton").addEventListener("click", function () {
  is24HourMode = !is24HourMode; // Alternar entre os modos

  if (is24HourMode) {
    this.textContent = "Alternar para Modo 12 Horas";
  } else {
    this.textContent = "Alternar para Modo 24 Horas";
  }
});

// Modificar a parte do relógio digital no setInterval
// ...
let h = new Date().getHours();
if (!is24HourMode && h > 12) {
  h = h - 12;
}
// ...

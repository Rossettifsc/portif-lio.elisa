
function atualizarRelogio() {
  const agora = new Date();

  const horas = agora.getHours();
  const minutos = agora.getMinutes();
  const segundos = agora.getSeconds();
  const milissegundos = agora.getMilliseconds();

  const hora = document.getElementById("clock-hour-hand");
  const minuto = document.getElementById("clock-minute-hand");
  const segundo = document.getElementById("clock-second-hand");
  const digital = document.getElementById("widget-time");

  if (!hora || !minuto || !segundo || !digital) return;

  // Ponteiro das horas
  hora.style.transform =
    `translateX(-50%) rotate(${(horas % 12) * 30 + minutos * 0.5}deg)`;

  // Ponteiro dos minutos
  minuto.style.transform =
    `translateX(-50%) rotate(${minutos * 6 + segundos * 0.1}deg)`;

  // Ponteiro dos segundos
  segundo.style.transform =
    `translateX(-50%) rotate(${segundos * 6 + milissegundos * 0.006}deg)`;

  // Horário digital
  digital.textContent = agora.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });
}

atualizarRelogio();
setInterval(atualizarRelogio, 50);

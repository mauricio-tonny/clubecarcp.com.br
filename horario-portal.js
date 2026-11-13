const horarioPortal = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'America/Sao_Paulo',
  weekday: 'short',
  hour: '2-digit',
  hourCycle: 'h23'
});
const diasUteis = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const diasPorExtenso = ['segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira'];

function disponibilidadePortal(agora) {
  const partes = Object.fromEntries(horarioPortal.formatToParts(agora)
    .map(({type, value}) => [type, value]));
  const dia = diasUteis.indexOf(partes.weekday);
  const hora = Number(partes.hour);

  if (dia >= 0 && hora >= 8 && hora < 18) return { aberto: true };
  const proximoDia = dia < 0 ? 0 : (dia + 1) % diasUteis.length;
  return { aberto: false, abertura: dia >= 0 && hora < 8 ? 'hoje' : diasPorExtenso[proximoDia] };
}

const botaoPortal = document.querySelector('#portal-button');
const avisoPortal = document.querySelector('#portal-notice');
const aberturaPortal = document.querySelector('#portal-next-opening');

botaoPortal.addEventListener('click', () => {
  const estado = disponibilidadePortal(new Date());
  if (estado.aberto) {
    window.location.assign(botaoPortal.dataset.url);
    return;
  }
  aberturaPortal.textContent = `Próxima abertura: ${estado.abertura}, às 08h.`;
  avisoPortal.showModal();
});

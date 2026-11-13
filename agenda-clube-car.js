// Substitua os exemplos pela agenda real. Use datas no formato AAAA-MM-DD.
// Para eventos de um dia, omita fim. Use "clube" ou "regional" no campo tipo.
const eventos = [
  { nome: 'Exposição de veículos antigos', cidade: 'Londrina, PR', inicio: '2026-12-06', tipo: 'regional', exemplo: true },
  { nome: 'Encontro de clássicos', cidade: 'Cornélio Procópio, PR', inicio: '2026-11-28', tipo: 'clube', exemplo: true },
  { nome: 'Passeio de carros antigos', cidade: 'Bandeirantes, PR', inicio: '2026-12-12', fim: '2026-12-13', tipo: 'regional', exemplo: true }
];

function proximosEventos(lista, hoje) {
  return lista.filter(evento => (evento.fim || evento.inicio) >= hoje)
    .sort((a, b) => a.inicio.localeCompare(b.inicio));
}

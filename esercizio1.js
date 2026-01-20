
const giocatori = [
  {
    nome: "Alex",
    puntiBase: 100,
    prestazioni: [30, 25, 40]
  },
  {
    nome: "Marco",
    puntiBase: 80,
    prestazioni: [20, 35, 15, 10]
  },
  {
    nome: "Sara",
    puntiBase: 120,
    prestazioni: [50, 45]
  }
];
function aggiornaPunti(puntiBase, ...altriPunti) {
  let totale = puntiBase;

  for (let punti of altriPunti) {
    totale += punti;
  }

  return totale;
}
giocatori.forEach(giocatore => {
  const punteggioTotale = aggiornaPunti(
    giocatore.puntiBase,
    ...giocatore.prestazioni
  );

  console.log(`Giocatore: ${giocatore.nome} - Punteggio totale: ${punteggioTotale}`);
});

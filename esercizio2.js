// 1. Struttura dati: creazione dinamica dell'array dei lettori
const lettori = [];

lettori.push(
  {
    nome: "Giulia",
    giorniBase: 5,
    prestiti: [12, 8, 15]
  },
  {
    nome: "Luca",
    giorniBase: 3,
    prestiti: [7, 10]
  },
  {
    nome: "Anna",
    giorniBase: 10,
    prestiti: [20, 5, 6, 9]
  }
);

// 2. Funzione di calcolo con Rest Parameter
function aggiornaGiorni(giorniBase, ...durataPrestiti) {
  let totale = giorniBase;

  for (let giorni of durataPrestiti) {
    totale += giorni;
  }

  return totale;
}

// 3. Output: ciclo dei lettori e uso dello Spread Operator
lettori.forEach(lettore => {
  const totaleGiorni = aggiornaGiorni(
    lettore.giorniBase,
    ...lettore.prestiti
  );

  console.log(
    `Lettore: ${lettore.nome}\n` +
    `Giorni base: ${lettore.giorniBase}\n` +
    `Totale giorni di prestito: ${totaleGiorni}\n`
  );
});

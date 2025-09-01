// SNACK 1

let dati: unknown;

if (typeof dati === 'string') {
  console.log(dati.toUpperCase());
} else if (typeof dati === 'number') {
  console.log(dati * 2)
} else if (typeof dati === 'boolean') {
  console.log(dati ? 'Sì' : 'No');
  {
    console.log('false')
  }
} else if (typeof dati === null) {
  console.log('il dato è vuoto')
} else if (Array.isArray(dati)) {
  console.log(dati.length)
} else if (dati instanceof Promise) {
  dati.then((msg) => {
    console.log(msg)
  })
}
else {
  console.log('tipo non supportato')
}


// SNACK 2

type Dipendente = {
  nome: string,
  cognome: string,
  annoNascita: number,
  sesso: 'm' | 'f',
  anniDiServizio: number[],
  readonly emailAziendale: string,
  contratto: "indeterminato" | "determinato" | "freelance"
}


// SNACK 3

type Developer = Dipendente & {
  livelloEsperienza: 'Junior' | 'Mid' | 'Senior',
  linguaggi?: string[],
  certificazioni: string[]
}

type ProjectManager = Dipendente & {
  teamSize: number | null,
  budgetGestito?: number,
  stakeholderPrincipali: string[]
}

type Team = {
  nome: string,
  progettoAttuale: string | null,
  budget: number,
  membri: [ProjectManager, Developer, ...Developer[]]
}
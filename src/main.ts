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

} else {
  console.log('tipo non supportato')
}

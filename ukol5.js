let jmeno = prompt('Ahoj, jak se jmenujes?');
let jmenoOdpoved = jmeno;
let vek = Number(prompt('Kolik je ti let?'));
let vekOdpoved = vek;
console.log(jmenoOdpoved);
console.log(vekOdpoved);
if (vek > 18) {
  console.log('Muzes ridit auto.');
} else {
  console.log('Nemuzes ridit auto. Muzes ho ridit za ' + (18 - vek) + 'let. ');
}

// pokus cislo dva podla andy
let vaseJmeno = prompt('JAk se jmenujes?');
console.log(vaseJmeno);
let vasVek = Number(prompt('Kolike je ti let?'));
console.log(vasVek);

if (vasVek >= 18) {
  console.log(
    `Tvoje jmeno je ${vaseJmeno}, je ti ${vasVek} a muzes ridit auto. `
  );
} else {
  console.log(
    `Tvoje jmeno je ${vaseJmeno}, tvuj vek je ${vasVek} a tak nemuzes ridit auto. `
  );
}

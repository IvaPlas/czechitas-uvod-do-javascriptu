let jmeno = prompt('Ahoj, jak se jmenujes?');
let jmenoOdpoved = jmeno;
let vek = prompt('Kolik je ti let?');
let vekOdpoved = vek;
console.log(jmenoOdpoved);
console.log(vekOdpoved);
if (vek > 18) {
  console.log('Muzes riditi auto.');
} else {
  console.log('Nemuzes ridit auto. Muzes ho ridit za ' + (18 - vek) + 'let. ');
}

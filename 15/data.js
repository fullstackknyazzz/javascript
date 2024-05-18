// data.js

async function fetchData() {
  const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
  const data = await response.json();
  return data;
}

let factData;

fetchData().then(data => {
  factData = data;
  console.log(factData);
});

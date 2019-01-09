const url = window.location.href;
const link = window.location.href;

if (url.indexOf("\/detail.html") !== -1) {
  getPokeDetails();
} else {
  getPokeList();
}

function getPokeList(){
  const pokemonList = document.getElementById('pokemons');
(function() {
fetch('https://pokeapi.co/api/v2/pokemon/').then(response => {
  response.json().then(pokelist => {
    let html = '';
    for (const pokemon of pokelist.results) {
      html += `<li>${pokemon.name}`;
      html += `<button onClick="showDetails()">`;
      html += `Details`;
      html += `</button><br><br>`;
      html += `</li>`;
    }
    pokemonList.innerHTML = html;
  });
});
})();
}
/*function parseID(url: string){
  return url.split("/")[3];
}*/
function showDetails(){
  const win = window.open(`/detail.html`, '_self');
    win.focus();
}


function getPokeDetails() {
  const pokemonDetail = document.getElementById('pokemonDetail');
 // let id = parseID(url);
  (function () {
    fetch('https://pokeapi.co/api/v2/pokemon/1/').then(response => {
      response.json().then(pokemon => {
        let html = '';
      //  html += `<p>PokeID : ${id} </p>`;
        html += `<h1>${pokemon.name}</h1>`
        html += `<p><img src="${pokemon.sprites.front_default}"/></p>`
        html += `<p>Weight: ${pokemon.weight / 10} kg</p>`
        html += `<p>Abilites: </p>`
        const abilites = pokemon.abilities
        abilites.forEach(function (element) {
            html += `<li>${element.ability.name}</li>`;
        });
        pokemonDetail.innerHTML = html;
      });
    });
  })();
}


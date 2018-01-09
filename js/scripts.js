var url = 'https://pokeapi.co/api/v2/pokemon/';
var pokemonList = $('#pokemons');
$("button").click(function(){
	$.ajax({
		url: url,
		method: 'GET',
		success: showPokemonList
	});
});
function showPokemonList(resp) {
	console.log(resp.results);
	resp.results.forEach(function(item, name) {
		$('<li>').text(item.name).appendTo(pokemonList);
		var counter = name+1;
		$('<img class="col-1" src="https://pokeapi.co/media/img/'+ counter +'.png">').appendTo(pokemonList);
		})
	url = resp.next;
};

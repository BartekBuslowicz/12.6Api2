// var url = 'https://pokeapi.co/api/v2/pokemon/';
// var pokemonList = $('#pokemons');
// var grid = $('#grid');
// $("button").click(function(){
// 	$.ajax({
// 		url: url,
// 		method: 'GET',
// 		success: showPokemonList
// 	});
// });
// function showPokemonList(resp) {
// 	console.log(resp.results);
// 	resp.results.forEach(function(item, name) {
// 		// $('<li>').text(item.name).appendTo(pokemonList);
// 		// $('<div class="col-3" id="grid2">').text(item.name).appendTo(grid);
// 		$('<img class="col-1" src="https://pokeapi.co/media/img/'+ name +'.png">').appendTo(grid);
// 		// var para = $('#grid');
// 		// para.each(function(index, element) {
// 		// 	var img = '<img class="col-3" src="https://pokeapi.co/media/img/' + index + '.png">'
//   //  			$(element).append(img)
// 		// });
// 		})
// 	url = resp.next;
// };
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
		count = name + 1;
		$('<img class="col-1" src="https://pokeapi.co/media/img/'+ count +'.png">').appendTo(pokemonList);
		})
	url = resp.next;
};

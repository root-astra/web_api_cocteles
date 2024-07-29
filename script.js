document.addEventListener('DOMContentLoaded', () => {
    fetchCocktails();
});

function fetchCocktails() {
    const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const drinks = data.drinks;
            const cocktailMenu = document.getElementById('cocktail-menu');
            drinks.forEach(drink => {
                const cocktailElement = document.createElement('div');
                cocktailElement.classList.add('cocktail');
                cocktailElement.innerHTML = `
                    <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
                    <h2>${drink.strDrink}</h2>
                    <p>${drink.strInstructions}</p>
                `;
                cocktailMenu.appendChild(cocktailElement);
            });
        })
        .catch(error => console.error('Error al cargar los cócteles:', error));
}

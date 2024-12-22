
const urlParams = new URLSearchParams(window.location.search);
const dietName = urlParams.get('diet');  

let title, description, ingredients, instructions, image;

if (dietName === 'fruit-salad') {
    title = 'Fruit Salad';
    description = 'A healthy and delicious fruit salad made with fresh seasonal fruits.';
    ingredients = ['Apple', 'Banana', 'Grapes', 'Orange'];
    instructions = 'Chop the fruits into bite-sized pieces and mix them in a bowl.';
    image = '../PNG-images/fruitsalad.jpg';
} else if (dietName === 'vegetarian-dish') {
    title = 'Vegetarian Dish';
    description = 'A nutritious vegetarian dish made with fresh vegetables and spices.';
    ingredients = ['Carrot', 'Potato', 'Tomato', 'Spinach'];
    instructions = 'Cook the vegetables with the spices until tender.';
    image = '../PNG-images/vegetariandish.jpg';
} else if (dietName === 'keto-meal') {
    title = 'Keto Meal';
    description = 'A keto-friendly meal with high protein and low carbs.';
    ingredients = ['Chicken', 'Broccoli', 'Cheese'];
    instructions = 'Grill the chicken and steam the broccoli.';
    image = '../PNG-images/ketomeal.jpg';
} else {
 
    title = 'Diet Not Found';
    description = 'Sorry, the details for this diet are not available.';
    ingredients = [];
    instructions = '';
    image = '';
}


const detailsSection = document.getElementById('diet-details');
detailsSection.innerHTML = `
    <h2>${title}</h2>
    <img src="${image}" alt="${title}" class="img-fluid" style="max-width: 100%; height: auto;">
    <p><strong>Description:</strong> ${description}</p>
    <h3>Ingredients</h3>
    <ul>
        ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
    </ul>
    <h3>Instructions</h3>
    <p>${instructions}</p>
`;

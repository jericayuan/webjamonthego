const recipes = [
  {
    id: 1,
    title: "Campfire Pancakes",
    category: "Breakfast",
    ingredients: ["Flour", "Milk", "Eggs", "Sugar"],
    instructions: "Mix ingredients and cook on a hot skillet over the fire.",
  },
  {
    id: 2,
    title: "Grilled Cheese Sandwich",
    category: "Lunch",
    ingredients: ["Bread", "Cheese", "Butter"],
    instructions:
      "Butter the bread, place cheese in between, and grill until golden brown.",
  },
  {
    id: 3,
    title: "Foil-Wrapped Salmon",
    category: "Dinner",
    ingredients: ["Salmon", "Lemon", "Garlic", "Butter"],
    instructions:
      "Wrap ingredients in foil and cook over the fire for 20 minutes.",
  },
  {
    id: 4,
    title: "Trail Mix",
    category: "Snacks",
    ingredients: ["Nuts", "Dried Fruit", "Chocolate Chips"],
    instructions: "Mix all ingredients in a bag.",
  },
  {
    id: 5,
    title: "S'mores",
    category: "Snacks",
    ingredients: ["Graham Crackers", "Marshmallows", "Chocolate"],
    instructions:
      "Toast marshmallows and sandwich with chocolate between graham crackers.",
  },
];

const recipeList = document.getElementById("recipe-list");
const filterButtons = document.querySelectorAll(".filter-btn");

function displayRecipes(filteredRecipes) {
  recipeList.innerHTML = "";
  filteredRecipes.forEach((recipe) => {
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");

    recipeCard.innerHTML = `
            <h3>${recipe.title}</h3>
            <p><strong>Category:</strong> ${recipe.category}</p>
            <p><strong>Ingredients:</strong> ${recipe.ingredients.join(
              ", "
            )}</p>
            <p><strong>Instructions:</strong> ${recipe.instructions}</p>
        `;

    recipeList.appendChild(recipeCard);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");
    if (category === "all") {
      displayRecipes(recipes);
    } else {
      const filteredRecipes = recipes.filter(
        (recipe) => recipe.category === category
      );
      displayRecipes(filteredRecipes);
    }
  });
});

displayRecipes(recipes);

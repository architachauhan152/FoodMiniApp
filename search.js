let search_container = document.querySelector(".container");

var search_button = document.querySelector(".search-button");

search_button.addEventListener("click", getFoodData);

async function getFoodData() {
  let food_dish = document.getElementById("search-meals").value;
  let res = await fetch(
    `https://themealdb.com/api/json/v1/1/search.php?s=${food_dish}`
  );

  let data = await res.json();
  appendFood(data);
  console.log("appendFood:", appendFood);
}

var food_container = document.querySelector(".container");

function appendFood(d) {
  console.log("d:", d);
  var overlay = document.querySelector(".overlay");

  food_container.innerHTML = "";
  if (d.meals != null) {
    d.meals.forEach(({ strMeal, strMealThumb, strInstructions }) => {
      let div = document.createElement("div");
      div.setAttribute("class", "element");
      let h1 = document.createElement("h1");
      h1.innerHTML = strMeal;

      let img = document.createElement("img");
      img.src = strMealThumb;
      let recipe = document.createElement("p");
      recipe.innerText = strInstructions;

      div.append(h1, img, recipe);
      food_container.append(div);
      food_container.style.display = "block";
      overlay.style.display = "block";
    });
  }
}

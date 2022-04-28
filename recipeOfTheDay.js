async function getData() {
  let res = await fetch("https://themealdb.com/api/json/v1/1/random.php");

  let data = await res.json();
  appendFood(data);
  //console.log('data:', data.meals)
}

var food_container = document.querySelector(".container");

function appendFood(d) {
  console.log("d:", d);

  food_container.innerHTML = "";
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

getData();

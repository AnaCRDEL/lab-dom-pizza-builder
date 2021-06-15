// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false,
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  document.querySelectorAll('.sauce').forEach((sauce) => {
    if(state.whiteSauce){
      sauce.classList.add('sauce-white')
    } else{
      sauce.classList.remove('sauce-white')
    }
  });
}

function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust').forEach((crust) => {
    if(state.glutenFreeCrust){
      crust.classList.add('crust-gluten-free')
    } else{
      crust.classList.remove('crust-gluten-free')
    }
  });
}

function renderButtons() {
  if (state.pepperoni) {
    document.querySelector('.btn-pepperoni').classList.add('active');
  } else {
    document.querySelector('.btn-pepperoni').classList.remove('active');
  }
  if (state.mushrooms) {
    document.querySelector('.btn-mushrooms').classList.add('active');
  } else {
    document.querySelector('.btn-mushrooms').classList.remove('active');
  }
  if (state.greenPeppers) {
    document.querySelector('.btn-green-peppers').classList.add('active');
  } else {
    document.querySelector('.btn-green-peppers').classList.remove('active');
  }
  if (state.whiteSauce) {
    document.querySelector('.btn-sauce').classList.add('active');
  } else {
    document.querySelector('.btn-sauce').classList.remove('active');
  }
  if (state.glutenFreeCrust) {
    document.querySelector('.btn-crust').classList.add('active');
  } else {
    document.querySelector('.btn-crust').classList.remove('active');
  }
}

// function renderPrice() {
//   // Iteration 4: change the HTML of `<aside class="panel price">`

//   var totalPrice = basePrice
//   var $list = document.querySelector('aside.panel.price ul')
//   $list.innerHTML = ""
//   console.log($list.innerHTML);

//   for (var ingredientKey in ingredients) {
//     if (state[ingredientKey]) {
//       totalPrice += ingredients[ingredientKey].price
//       $list.innerHTML += `<li>$${ingredients[ingredientKey].price} ${ingredients[ingredientKey].name.toLowerCase()}</li>`
//     }
//   }
//   document.querySelector('aside.panel.price strong').innerHTML = "$" + totalPrice
// }

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let ingredientsList = document.querySelector('.panel.price ul');
  ingredientsList.innerHTML = '';
  let finalPrice = basePrice;
  if (state.pepperoni) {
    finalPrice += ingredients.pepperoni.price
    ingredientsList.innerHTML += `<li>$${ingredients.pepperoni.price} ${ingredients.pepperoni.name.toLowerCase()}</li>`
  }
  if (state.mushrooms) {
    finalPrice += ingredients.mushrooms.price
    ingredientsList.innerHTML += `<li>$${ingredients.mushrooms.price} ${ingredients.mushrooms.name.toLowerCase()}</li>`
  }
  if (state.greenPeppers) {
    finalPrice += ingredients.greenPeppers.price
    ingredientsList.innerHTML += `<li>$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name.toLowerCase()}</li>`
  }
  if (state.whiteSauce) {
    finalPrice += ingredients.whiteSauce.price
    ingredientsList.innerHTML += `<li>$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name.toLowerCase()}</li>`
  }
  if (state.glutenFreeCrust) {
    finalPrice += ingredients.glutenFreeCrust.price
    ingredientsList.innerHTML += `<li>$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name.toLowerCase()}</li>`
  }
  document.querySelector('.panel.price strong').innerHTML = `$${finalPrice}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
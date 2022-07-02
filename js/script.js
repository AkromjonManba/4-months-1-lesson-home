let elList = document.querySelector(".list");
// let newArray = []
function appendToDom(array, node) {
  for (items of array) {
    let newItem = document.createElement("li");
    let elSpan = document.createElement("span");
    let elHeading = document.createElement("h1");
    let elWeight = document.createElement("div");
    let elHeight = document.createElement("div");
    let elType = document.createElement("p");
    let elImg = document.createElement("img");

    elSpan.textContent = `##${items.id}`;
    elHeading.textContent = `${items.name}`;
    elWeight.textContent = `Wieght: ${items.weight}`;
    elHeight.textContent = `Hieght: ${items.height}`;
    elImg.src = `${items.img}`;
    elType.textContent = `${items.type}`;

    newItem.setAttribute("class", "boxes");
    elSpan.setAttribute("class", "item__id");
    newItem.appendChild(elSpan);
    newItem.appendChild(elHeading);
    newItem.appendChild(elWeight);
    newItem.appendChild(elHeight);
    newItem.appendChild(elImg);
    newItem.appendChild(elType);
    node.appendChild(newItem);
  }
}

let elSelect = document.querySelector(".js-select");

appendToDom(pokemons, elList);
let result = [];
elSelect.addEventListener("change", () => {
  result = [];
  elList.innerHTML = "";
  let elSelectVal = elSelect.value;
  pokemons.forEach((poc) => {
    if (poc.type.includes(elSelectVal)) {
      result.push(poc);
    }
  });
  appendToDom(result, elList);
});

let optionList = new Set();

pokemons.forEach((item) => {
  optionList.add(...item.type);
});

optionList.forEach((elment) => {
  let newOption = document.createElement("option");
  newOption.textContent = elment;
  newOption.value = elment;
  
  elSelect.appendChild(newOption)
});

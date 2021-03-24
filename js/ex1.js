const houses = [
    {
      code: "ST",
      name: "Stark"
    },
    {
      code: "LA",
      name: "Lannister"
    },
    {
      code: "BA",
      name: "Baratheon"
    },
    {
      code: "TA",
      name: "Targaryen"
    }
  ];

  
  const getCharacters = houseCode => {
    switch (houseCode) {
      case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
      case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
      case "BA":
        return ["Robert", "Stannis", "Renly"];
      case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
      default:
        return []; // Empty array
    }
};

//  HTML option tag
const OptionElement = (text, value) => {
  const element = document.createElement("option");
  element.textContent = text;
  element.value = value;
  return element;
};

// HTML list tag
const LiElement = text => {
  const element = document.createElement("li");
  element.textContent = text;
  return element;
};

const houseElement = document.querySelector("select");

// Fill the house list
houses.forEach(house => {
  houseElement.appendChild(OptionElement(house.name, house.code));
});

houseElement.addEventListener("change", e => {

  const characters = getCharacters(e.target.value);
  const characterElement = document.getElementById("characters");
  characterElement.innerHTML = "";
  characters.forEach(character => {
    characterElement.appendChild(LiElement(character));
  });
});
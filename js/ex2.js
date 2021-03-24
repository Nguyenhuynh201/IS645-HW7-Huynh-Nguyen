const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua-and-Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Autria",
    "Azerbaïjan"
  ];

const countryElement = document.querySelector("input");
const suggestionsElement = document.getElementById("suggestions");

const createSuggestionElement = country => {
    const element = document.createElement("div");
    element.classList.add("suggestion");
    element.textContent = country;
    element.addEventListener("click", e => {
      countryElement.value = e.target.textContent;
      suggestionsElement.innerHTML = "";
    });
    return element;
  };

  countryElement.addEventListener("input", () => {
    suggestionsElement.innerHTML = "";
    countryList.forEach(country => {
      // Check if the inputted value matches the start of the country
      if (country.startsWith(countryElement.value)) {
        suggestionsElement.appendChild(createSuggestionElement(country));
      }
    });
  });
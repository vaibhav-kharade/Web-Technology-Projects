const countryContainer = document.getElementById("country-container");
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("change", toggleTheme);

function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}

async function fetchCountries() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const countries = await response.json();
    displayCountries(countries);
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
}

function displayCountries(countries) {
  countryContainer.innerHTML = "";

  countries.forEach(country => {
    const countryCard = createCountryCard(country);
    countryContainer.appendChild(countryCard);
  });
}

function createCountryCard(country) {
  const card = document.createElement("div");
  card.classList.add("country-card");
  card.innerHTML = `
    <h2>${country.name.common}</h2>
    <p>Population: ${country.population}</p>
    <p>Region: ${country.region}</p>
    <p>Capital: ${country.capital}</p>
  `;
  return card;
}

fetchCountries();


//In this example, we're creating a web app that fetches data about countries using the REST Countries API. The app displays country information in cards. The theme switcher allows users to toggle between light and dark themes.
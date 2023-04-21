const loadRestCountries = () => {
	const url = "https://restcountries.com/v3.1/all";
	fetch(url)
		.then((res) => res.json())
		.then((data) => displayRestCountries(data));
};

const displayRestCountries = (countries) => {
	console.log(countries);
	const allCountries = countries.map((country) => getCountryHtml(country));
	const countryDiv = document.getElementById("countries");
	countryDiv.innerHTML = allCountries.join(" ");
};

const getCountryHtml = ({ name, flags }) => {
	// console.log(country.name.common);
	// Option 2
	return `
    <div class="country">
      <h1>${name.common}</h1>
      <img src="${flags.png}" alt="">
    </div>
  `;
};
// const getCountryHtml = (country) => {
// 	// console.log(country.name.common);
// 	// Option 1
// 	const { name, flags } = country;
// 	return `
//     <div class="country">
//       <h1>${name.common}</h1>
//       <img src="${flags.png}" alt="">
//     </div>
//   `;
// };

// Original Code
// const getCountryHtml = (country) => {
// 	// console.log(country.name.common);
// 	return `
//     <div class="country">
//       <h1>${country.name.common}</h1>
//       <img src="${country.flags.png}" alt="">
//     </div>
//   `;
// };

loadRestCountries();

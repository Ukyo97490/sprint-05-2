async function render() {
  let rep = await fetch("https://restcountries.com/v3.1/region/europe");
  let data = await rep.json();

  console.log(data);

  let result = "";

  for (country in data) {
    result += `<li> ${data[country].name.official} </li>`;
  }
  document.getElementById("list").innerHTML = result;
}
render();

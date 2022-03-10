async function render() {
  let rep = await fetch("https://restcountries.com/v3.1/region/europe");
  let data = await rep.json();

  console.log(data);

  let result = "";
  let result0 = "";
  let result1 = "";
  let result2 = "";
  for (country in data) {
    result += `<li class="list-group-item fw-bold text-start px-1"> ${data[country].name.official} </li>`;
  }
  for (zone in data) {
    result0 += `<li class="list-group-item  text-end "> ${data[zone].area.toLocaleString("en-US")} </li>`;
  }
  for (ppl in data) {
    result1 += `<li class="list-group-item  text-end  "> ${data[ppl].population.toLocaleString("en-US")} </li>`;
  }
  for (cptl in data) {
    result2 += `<li class="list-group-item  text-start px-1"> ${data[cptl].capital} </li>`;
  }
  console.log(typeof "list");
  document.getElementById("list").innerHTML = result;
  document.getElementById("list0").innerHTML = result0;
  document.getElementById("list1").innerHTML = result1;
  document.getElementById("list2").innerHTML = result2;
}
render();

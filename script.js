async function getUsers() {
  try {
    let response = await fetch("https://newsdata.io/api/1/news?apikey=pub_2280343c37d1d211ec90c8b4a87f98e48201d");
    let data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

function createGridCard(item) {
  const gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");
  const flexItem = document.createElement("div2");
  flexItem.classList.add('flex-item')

  const image = document.createElement("img");
  image.src = item.image_url;
  gridItem.appendChild(image);

  const title = document.createElement("h3");
  title.textContent = item.title;
  gridItem.appendChild(title);

  const description = document.createElement("p");
  description.textContent = item.description;
  gridItem.appendChild(description);

  // const count = document.createElement("p");
  // count.textContent = `Count: ${item.count}`;
  // gridItem.appendChild(count);

  const category = document.createElement("p");
  category.textContent = `Category: ${item.category}`;
  gridItem.appendChild(category);

  return gridItem;
}

getUsers()
  .then(data => {
    const gridContainer = document.getElementById("grid-container");
    data.forEach(item => {
      const gridCard = createGridCard(item);
      gridContainer.appendChild(gridCard);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });

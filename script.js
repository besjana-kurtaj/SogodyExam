async function getUsers() {
  try {
    let response = await fetch("https://newsdata.io/api/1/news?apikey=pub_2280343c37d1d211ec90c8b4a87f98e48201d");
    let data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

getUsers()
  .then(data => {
    const gridContainer = document.getElementById("grid-container");
    if (Array.isArray(data.results)) {
      data.results.forEach(item => {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");

        const image = document.createElement("img");
        image.src = item.image_url;
        image.alt = item.title;
        gridItem.appendChild(image);

        const title = document.createElement("h3");
        title.textContent = item.title;
        gridItem.appendChild(title);

        const date = document.createElement("p");
        date.textContent = item.pubDate;
        gridItem.appendChild(date);

        gridContainer.appendChild(gridItem);
      });
    } else {
      console.error("Invalid data format:", data);
    }
  })
  .catch(error => {
    console.error("Error:", error);
  });

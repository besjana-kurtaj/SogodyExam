async function getUsers() {
  try {
    let response = await fetch("https://newsdata.io/api/1/news?apikey=pub_2280343c37d1d211ec90c8b4a87f98e48201d&q=bitcoin");
    let data = await response.json();
    console.log(data.results);
    return data.results;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

function createGridCard(item) {
  const gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");

  const image = document.createElement("img");
  image.src = item.image_url;
  gridItem.appendChild(image);

  const title = document.createElement("h3");
  if (item.title != null) {
    if (item.title.length > 15) {
      title.textContent = item.title.substring(0, 15) + '...';
    } else {
      title.textContent = item.title;
    }



    gridItem.appendChild(title);
  }
  const description = document.createElement("p");

  if (item.description != null) {
    if (item.description.length > 100) {
      description.textContent = item.description.substring(0, 100) + '...';
    } else {
      description.textContent = item.description;
    }
    gridItem.appendChild(description);
  }

  const flexContainer = document.createElement("div");
  flexContainer.classList.add("flex-container");

  const date = document.createElement("p");
  const pubDate = new Date(item.pubDate);
  const formattedDate = pubDate.toLocaleDateString();
  date.textContent = formattedDate;
  flexContainer.appendChild(date);

  const category = document.createElement("p");
  category.textContent = ` |${item.category}`;
  flexContainer.appendChild(category);

  gridItem.appendChild(flexContainer);

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


const linkButton = document.createElement('a');
linkButton.innerText = "Sogody";
linkButton.setAttribute('href', 'https://sogody.com');
const newsTitle = document.querySelector('.news-title');

setTimeout(() => {
  newsTitle.append(linkButton);

  linkButton.addEventListener('click', () => {
    linkButton.innerText = "Loading...";
  });
}, Math.random() * 2000);



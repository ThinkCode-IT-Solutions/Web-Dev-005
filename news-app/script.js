let fetchButton = document.querySelector("#fetch-news-btn");

// this function will fetch the newsapi apis and return a parsed array
let fetchNews = () => {
  const method = "GET";
  const apiKey = "fd8d9cccc8b8444194fa5063b029bcee";
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

  let xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.onload = () => {
    console.log("data is reached");
    let response = xhr.responseText;
    response = JSON.parse(response);
    console.log(response);

    localStorage.setItem("news", JSON.stringify(response));
  };
  xhr.onprogress = () => {
    console.log("data is loading ...");
  };
  xhr.send();

  showNews();
};

let showNews = () => {
  // this function will handle the display of the news
  let news = localStorage.getItem("news");
  news = JSON.parse(news);
  let newsContainer = document.querySelector("#news-container");

  let index = 0;
  while (index < news.articles.length) {
    let newsObj = news.articles[index];
    let newsString = `<div class="bg-white shadow-md border border-gray-200 flex flex-col justify-between">
                    <div class="relative">
                        <img class="w-full object-cover aspect-card-image" src="${newsObj.urlToImage}" alt="News Article Image">
                    </div>

                    <div class="p-5 flex flex-col flex-grow">
                        <div class="flex items-center justify-between text-xs text-gray-500 mb-3">
                            <span class="font-semibold bg-gray-100 px-2 py-1 uppercase">${newsObj.author}</span>
                            <span>${newsObj.publishedAt}</span>
                        </div>

                        <h5 class="text-gray-900 font-bold text-xl tracking-tight mb-2 flex-grow">
                            ${newsObj.title}
                        </h5>

                        <p class="font-normal text-gray-600 mb-4">
                            ${newsObj.description}
                        </p>
                    </div>

                    <div class="p-5 border-t border-gray-200">
                         <a href="${newsObj.url}" target="_blank" rel="noopener noreferrer" class="w-full block text-center text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5">
                            Read Full Article &rarr;
                        </a>
                    </div>
                </div>`;
                newsContainer.innerHTML += newsString;

    index++;
  }
};

fetchButton.addEventListener("click", fetchNews);

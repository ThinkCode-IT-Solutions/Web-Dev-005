let fetchButton = document.querySelector("#fetch-news-btn");

// this function will fetch the newsapi apis and return a parsed array
let fetchNews = () => {
    const method = "GET";
    const apiKey = "fd8d9cccc8b8444194fa5063b029bcee";
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`

    let xhr = new XMLHttpRequest();
    xhr.open(method,url)
    xhr.onload = () => {
        console.log("data is reached");
        let response = xhr.responseText;
        response = JSON.parse(response);
        console.log(response);
    }
    xhr.onprogress = () => {
        console.log("data is loading ...");
    }

    xhr.send();

}






fetchButton.addEventListener("click", fetchNews);
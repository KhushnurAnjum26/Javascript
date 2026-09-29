function fetchWithTimeout(url, ms) {

    let request = fetch(url);

    let timeout = new Promise((resolve, reject) => {

        setTimeout(() => {
            reject("Request Timed Out");
        }, ms);

    });

    return Promise.race([request, timeout]);
}

fetchWithTimeout("https://jsonplaceholder.typicode.com/posts", 2000)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
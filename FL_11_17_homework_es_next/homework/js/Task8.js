let fetchReturn = (url) => {
        return fetch(url)
        .then(response => response.text())
        .then(data => JSON.parse(data))
        .then(result => console.log(result))
        .catch(throwError =>  console.log('Incorrect url'));
}
fetchReturn('https://api.github.com/users/electricera/repos');
// APIKEY définie dans apiKey.js

const searchedMovie = "Iron Man"

const URL = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchedMovie}`

const myFunction = () =>
{
    console.log("Texte de myFunction");
}

const searchMovie = async () => {
    const response = await fetch(URL);
    console.log(response);
    const data = await response.json();
    console.log(data);
}

const searchMovie2 = () => {
    fetch(URL)
        .then ((response) => {
            console.log(response);
            const data = response.json();
            console.log(data);
            return data;
        })
        .then ((response) => console.log(response))
}

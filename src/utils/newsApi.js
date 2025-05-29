import { apiKey } from "./constants";

function getNewsData(query) {
return fetch(`https://newsapi.org/v2/everything?q=${q}&apiKey=${apiKey}`) 
}
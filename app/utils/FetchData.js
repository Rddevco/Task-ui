export async function fetchPostTitle() {
    try{
const response = await fetch ("https://jsonplaceholder.typicode.com/posts/1")
const data = await response.json();
return data.title;
}catch(error){
console.error("Error fEtching Data",error);
return "error fetching data";
}

}

fetchPostTitle();
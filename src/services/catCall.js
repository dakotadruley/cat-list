export const catCall = () => {
  return fetch('https://api.thecatapi.com/v1/images/search?limit=5&size=small')
    .then(res => res.json())
  
    .then(json => json.map(({ url }) => url));
};
  

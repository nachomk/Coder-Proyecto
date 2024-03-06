fetch("https://api.mercadolibre.com/sites/MLA/search#json")
    .then((response) => {
        return response.json();
    })
    .then ((user) => {
        console.log(user);
    })
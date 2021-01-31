const API_KEY = process.env.REACT_APP_API_KEY;

const Recipe = {
    search(foodItems){
        let arr = [];
        var request = new XMLHttpRequest();
        // console.log(foodItems);
        var URL =  'https://api.spoonacular.com/recipes/findByIngredients?ingredients=';
        URL = URL.concat(foodItems[0]["name"]);
        for (let i = 1; i < foodItems.length; i++) {
            URL = URL.concat(',+');
            URL = URL.concat(foodItems[i]["name"]);
        }
        URL = URL.concat('&number=25');
        URL = URL.concat('&apiKey=');
        URL = URL.concat(API_KEY);
        // URL = URL.concat('1e7bca06d34a4d629587bc834859e547');
        console.log(URL);
    
        request.open('GET', URL, true);
        request.onload = function () {
            // Begin accessing JSON data here
            var data = JSON.parse(this.response);
        
            if (request.status >= 200 && request.status < 400) {
                // data.forEach((recipe) => {
                //     console.log(recipe.title);
                // });
                // console.log(data);
                for (let i = 0; i < data.length; i++){
                    arr.push(data[i]);
                }
            }
            else {
               console.log('error');
            }
        }
        
        request.send();
        return arr;
    }
}

export default Recipe;




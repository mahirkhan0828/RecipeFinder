const API_KEY = process.env.REACT_APP_API_KEY;

const Recipe = {
    search(foodItems){
        let arr = [];
        var request = new XMLHttpRequest();
        
        var URL =  'https://api.spoonacular.com/recipes/findByIngredients?ingredients=';
        URL.concat(foodItems[0]["name"]);
        for (let i = 1; i < foodItems.length; i++) {
            URL.concat(',+');
            URL.concat(foodItems[i]["name"]);
        }
        URL.concat('&number=25');
        URL.concat('&apiKey=');
        URL.concat(API_KEY);
    
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




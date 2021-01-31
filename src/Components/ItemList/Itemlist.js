import './Itemlist.css';
import React from 'react';
import Recipe from '../../Util/Recipe';

export class Itemlist extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        item : "",
        itemList : [],
        currId: 1,
        searchResults : []
    }
  }
  updateInput(itemId, itemName){
        this.setState({
            [itemId]: itemName
        })
  }
  addFoodItem(){
      const newItem = {
          id: this.state.currId,
          name: this.state.item
      };
      this.state.itemList.push(newItem);
      this.setState({
          item: "",
          currId: this.state.currId + 1
    })
  }

  deleteFoodItem(id){
      this.setState({
          itemList: this.state.itemList.filter(foodItem => foodItem.id !== id)
      })
     
  }
  retrieveRecipes(){
    // Will call for API here
    let recipeArray = [];
    recipeArray = Recipe.search(this.state.itemList);
    
    
  }

  showRecipeButton(){
      if (this.state.itemList.length > 0){
          return (
                <button onClick = {() => this.retrieveRecipes()}>Find Recipes</button>
          )
      }
  }

  render(){
    return (
      <div className = "Itemslist">
          <div>
              <h2>Add Food Item:</h2>
              <input 
              type = "text"
              placeholder = "Enter"
              value = {this.state.item}
              onChange={e=> this.updateInput("item", e.target.value)}
              />
              <button onClick = {() => this.addFoodItem()}>Add</button>
          </div>
          <ul>
              {this.state.itemList.map(foodItem =>{
                  return (
                      <ul key = {foodItem.id}>
                        {foodItem.name}
                        <button onClick = {() => this.deleteFoodItem(foodItem.id)}>X</button>
                      </ul>
                  )
              }
              )}
          </ul>
          {this.showRecipeButton()}
          
      </div>
    );
  }
  
}
import './Itemlist.css';
import React from 'react';
import Recipe from '../../Util/Recipe';
import {Item} from '../Item/Item';

// Current State: Find recipes button works, sets up the searchResults state with spoonacular api. Show 
// results button works but we want to combine and be able to rerender with only find recipes button.
// The clear button right now is not in an if statement so it always shows. For some reason, when we wrap
// it inside of a helper function, it does not reset the searchResults state. But it works whenever, it 
// is on its own inside of the return

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
    this.setState({
        searchResults: recipeArray
    })
  }
  renderNow(){
      this.setState({})
  }
  showRecipeButton(){
      if (this.state.itemList.length > 0){
          return (
              <div>
                <button onClick = {() => {this.retrieveRecipes()}}>
                Find Recipes
                </button>
                <button onClick = {() => this.renderNow()}>SHOW RESULTS</button>  
              </div>
                
          )
      }
  }
  clearResults(){
      this.setState({
        searchResults: []
    })
  }
//   showClearButton(){
//     if (this.state.searchResults.length > 0){
//         return (
//             <button oncClick = {() => {this.clearResults()}}>Clear</button>
//         )
//     }
//   }

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
          
          <div className = "Items">
            {this.state.searchResults.map((item) => {
                return <Item recipeName = {item["title"]} imageUrl = {item["image"]}></Item>
            })}
          </div>
          {/* {this.showClearButton()} */}
          <button onClick = {() => this.clearResults()}>CLEAR</button>
        </div>
        
          
      
    );
  }
  
}
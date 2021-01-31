import './Item.css';
import React from 'react';

export class Item extends React.Component{
    render(){
        return(
            <div className = "Item">
                <img src = {this.props.imageUrl} alt = "Recipe"></img>
                <h3>{this.props.recipeName}</h3>
            </div>
        )
    }
}
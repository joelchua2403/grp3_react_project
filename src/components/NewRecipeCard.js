import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import SaveRecipeButton from "./SaveRecipeButton";
import UnsaveRecipeButton from "./UnsaveRecipeButton";
import { useState } from "react";
import { useEffect } from "react";

const NewRecipeCard = ({ recipe, setSavedRecipes, savedRecipes, isSaved, handleSaveRecipeButton, handleUnsaveRecipeButton }) => {
    
  const handleUnsaveRecipeButton = () => {
    setIsSaved(true);
    setSavedRecipeIDs(result);
   {savedRecipeIDs && console.log(savedRecipeIDs[0])};
    console.log(isSaved);


}

const handleSaveRecipeButton = () => {
    setIsSaved(false);
    setSavedRecipes(savedRecipes.filter((savedRecipe) => savedRecipe !== result));
}
   
  
    return (
    <MDBCol key={recipe.id}>
      <MDBCard>
        <MDBCardImage src={recipe.image} alt={recipe.title} position="top" />
        <MDBCardBody>
          <MDBCardTitle
            style={{
              height: "50px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {recipe.title}
          </MDBCardTitle>
          <MDBCardText>
            <Link to={`/recipe/${recipe.id}`}>Details</Link>
          </MDBCardText>
{/* 
          favRecipe = [1,2,5]

          favRecipes.includes(recipe.id)&& <p>fav</p> */}
          
          <button onClick={()=> saveFavRecipe(recipe.id)}></button>
           
            {isSaved ? <SaveRecipeButton onClick={handleSaveRecipeButton} /> : <UnsaveRecipeButton onClick={handleUnsaveRecipeButton}/> }
            
          
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default NewRecipeCard;

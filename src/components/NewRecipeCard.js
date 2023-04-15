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

const NewRecipeCard = ({
  recipe,
  setSavedRecipes,
  savedRecipes,
  savedRecipeIDs,
  setSavedRecipeIDs,
}) => {
  const handleUnsaveRecipeButton = (recipeID) => {
    setSavedRecipeIDs([...savedRecipeIDs, recipeID]);
    console.log(savedRecipeIDs);
  };

  const handleSaveRecipeButton = (recipeID) => {
    setSavedRecipeIDs(
      savedRecipeIDs.filter((savedRecipeID) => savedRecipeID !== recipeID)
    );
    console.log(savedRecipeIDs);
  };

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

          {/* <button onClick={()=> saveFavRecipe(recipe.id)}></button> */}
          {!savedRecipeIDs.includes(recipe.id) && (
            <UnsaveRecipeButton
              onClick={() => handleUnsaveRecipeButton(recipe.id)}
            />
          )}

          {savedRecipeIDs.includes(recipe.id) && (
            <SaveRecipeButton
              onClick={() => handleSaveRecipeButton(recipe.id)}
            />
          )}
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default NewRecipeCard;

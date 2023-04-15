import { useState, useEffect } from "react";
import { MDBRow } from "mdb-react-ui-kit";
import Spinner from "react-bootstrap/Spinner";
import NavbarHeader from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./MyFeedPage.css";
import NewRecipeCard from "../components/NewRecipeCard";

function MyFeedPage({
  myFeedRecipes,
  setMyFeedRecipes,
  getRecipeByID,
  savedRecipes,
  setSavedRecipes,
  handleUnsaveRecipeButton,
  handleSaveRecipeButton,
  savedRecipeIDs,
  setSavedRecipeIDs,
}) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const generateRandomRecipeIDs = () => {
      const randomIDs = [];
      for (let i = 0; i < 10; i++) {
        randomIDs.push(Math.floor(Math.random() * 1000000 + 999));
      }
      return randomIDs;
    };

    const fetchRecipes = async () => {
      setIsLoading(true);
      const recipeIDs = generateRandomRecipeIDs();
      const fetchedRecipes = [];

      for (const recipeID of recipeIDs) {
        try {
          const response = await getRecipeByID(recipeID);
          fetchedRecipes.push(response.data);
        } catch (error) {
          console.log(`Error fetching recipe ID ${recipeID}: ${error}`);
        }
      }

      setMyFeedRecipes(fetchedRecipes);
      setIsLoading(false);
      console.log(isLoading);
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <NavbarHeader />
      <Header />
      <h1 style={{ padding: "50px", textAlign: "center" }}>My Feed</h1>
      {isLoading ? (
        <div className="spinner-container">
          <Spinner animation="border" variant="secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <MDBRow className="row-cols-1 row-cols-md-5 g-4">
          {myFeedRecipes &&
            myFeedRecipes.map((myFeedRecipe) => (
              <NewRecipeCard
                key={myFeedRecipe.id}
                recipe={myFeedRecipe}
                setSavedRecipes={setSavedRecipes}
                savedRecipes={savedRecipes}
                handleUnsaveRecipeButton={handleUnsaveRecipeButton}
                handleSaveRecipeButton={handleSaveRecipeButton}
                savedRecipeIDs={savedRecipeIDs}
                setSavedRecipeIDs={setSavedRecipeIDs}
              />
            ))}
        </MDBRow>
      )}

      <Footer />
    </div>
  );
}

export default MyFeedPage;

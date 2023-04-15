import React from 'react'
import Header from '../components/Header'
import Searchbar from '../components/SearchBar'
import RecipeCard from '../components/RecipeCard'
import NavbarHeader from '../components/Navbar'
import Footer from '../components/Footer'
import NewRecipeCard from '../components/NewRecipeCard'
import { MDBRow } from "mdb-react-ui-kit";

const Homepage = ({ search, setSearch, searchRecipes, results, setSavedRecipes, savedRecipes, handleUnsaveRecipeButton, isSaved }) => {
  return (
    <>
    <NavbarHeader/>
    < Header />
   <Searchbar search={search} setSearch={setSearch} searchRecipes={searchRecipes} />
   {/* {results && results.length > 0 && <RecipeCard results={results} setSavedRecipes={setSavedRecipes} savedRecipes={savedRecipes} /> } */}

   <MDBRow className='row-cols-1 row-cols-md-5 g-4'>
   {/* {results && results.length > 0 && 
   results.map((result) => (<NewRecipeCard key={result.id}
        recipe={result} setSavedRecipes={setSavedRecipes} savedRecipes={savedRecipes} /> ))} */}

{results && results.length > 0 && 
results.map((result) => (<NewRecipeCard key={result.id}
      recipe={result} setSavedRecipes={setSavedRecipes} savedRecipes={savedRecipes} handleUnsaveRecipeButton={handleUnsaveRecipeButton} isSaved={isSaved}/> ))}

   </MDBRow>

        < Footer />
    </>
  )
}

export default Homepage

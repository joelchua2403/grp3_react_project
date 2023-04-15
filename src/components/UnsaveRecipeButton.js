import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import "./UnsaveRecipeButton.css";

function UnsaveRecipeButton({ onClick }) {
    return (
        <div className="unsave-recipe-button" onClick={onClick} >
            <FavoriteBorderRoundedIcon className="unsave-icon" />
        </div>
    )
}

export default UnsaveRecipeButton;
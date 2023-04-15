import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import './SaveRecipeButton.css';

function SaveRecipeButton({ onClick }) {
    return (
        <div className="save-recipe-button" onClick={onClick}>
            <FavoriteRoundedIcon className="save-icon" />
        </div>
    )
}

export default SaveRecipeButton;
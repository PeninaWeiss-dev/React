import {React,useEffect,useState} from 'react';
import styled from 'styled-components';
import { useSelector,useDispatch } from 'react-redux';
import { toggleFavorite } from '../Store/RecipesSlice';

const ToggleFavorite = (props) => {
    const {categoryId} = props;
    const {recipeId} = props;
    const [isFavorite, setIsFavorite] = useState(false);
    const categoryIndex = useSelector(state => state.recipes.recipesByCategory.findIndex(category => category.categoryId==categoryId))
    const recipes = useSelector(state => state.recipes.recipesByCategory[categoryIndex].recipes);
    const dispatch = useDispatch();

    useEffect(() => {
        const isFav =recipes.some(recipe => recipe.recipeId == recipeId && recipe.isFavorite);
        setIsFavorite(isFav);
    },[]);

    const handleFavoriteToggle =(e) =>{
      e.stopPropagation();
        setIsFavorite(!isFavorite);
        dispatch(toggleFavorite({ categoryId, recipeId }));
        console.log( `categoryId =${categoryId}, recipeId=${recipeId}`)
    }

    return (
        <StyledWrapper>
        <div  >
          <input type="checkbox"
            checked={isFavorite}
            id="favorite"
            name="favorite-checkbox"
            defaultValue="favorite-button" />
          <label htmlFor="favorite" className="container"      
             onClick={handleFavoriteToggle}

          style={{borderRadius: 25,
            backgroundColor: "#F5C71A",
          }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
            <div className="action">
              <span className="option-1">Add to Favorites</span>
              <span className="option-2">Added to Favorites</span>
            </div>
          </label>
        </div>
      </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  label {
   background-color: white;
   display: flex;
   align-items: center;
   gap: 14px;
   padding: 10px 15px 10px 10px;
   cursor: pointer;
   user-select: none;
   border-radius: 10px;
   box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
   color: black;
  }

  input {
  display: none
  }

  input:checked + label svg {
   fill: black;);
   stroke: black;
   animation: heartButton 1s;
  }


  @keyframes heartButton {
   0% {
    transform: scale(1);
   }

   25% {
    transform: scale(1.3);
   }

   50% {
    transform: scale(1);
   }

   75% {
    transform: scale(1.3);
   }

   100% {
    transform: scale(1);
   }
  }

  input + label .action {
   position: relative;
   overflow: hidden;
   display: grid;
  }

  input + label .action span {
   grid-column-start: 1;
   grid-column-end: 1;
   grid-row-start: 1;
   grid-row-end: 1;
   transition: all .5s;
  }

  input + label .action span.option-1 {
   transform: translate(0px,0%);
   opacity: 1;
  }

  input:checked + label .action span.option-1 {
   transform: translate(0px,-100%);
   opacity: 0;
  }

  input + label .action span.option-2 {
   transform: translate(0px,100%);
   opacity: 0;
  }

  input:checked + label .action span.option-2 {
   transform: translate(0px,0%);
   opacity: 1;
  }`;

export default ToggleFavorite;
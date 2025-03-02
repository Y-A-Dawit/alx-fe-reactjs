import { useRecipeStore } from './recipeStore';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === parseInt(id))
  );
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  if (!recipe) return <p>Recipe not found</p>;

  const isFavorite = favorites.includes(recipe.id);

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <button onClick={() => (isFavorite ? removeFavorite(recipe.id) : addFavorite(recipe.id))}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default RecipeDetails;









































// import { useParams, useNavigate } from 'react-router-dom';
// import useRecipeStore from '../store/recipeStore';
// import EditRecipeForm from './EditRecipeForm';
// import DeleteRecipeButton from './DeleteRecipeButton';

// const RecipeDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const recipe = useRecipeStore((state) =>
//     state.recipes.find((r) => r.id === parseInt(id))
//   );

//   if (!recipe) {
//     return <p>Recipe not found.</p>;
//   }

//   return (
//     <div>
//       <h1>{recipe.title}</h1>
//       <p>{recipe.description}</p>
//       <EditRecipeForm recipe={recipe} />
//       <DeleteRecipeButton recipeId={recipe.id} onDelete={() => navigate('/')} />
//     </div>
//   );
// };

// export default RecipeDetails;

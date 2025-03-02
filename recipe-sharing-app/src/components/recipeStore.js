import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;













































// import create from 'zustand';

// const useRecipeStore = create((set) => ({
//   recipes: [],
//   searchTerm: '', // <-- Added search term state

//   addRecipe: (newRecipe) =>
//     set((state) => ({ recipes: [...state.recipes, newRecipe] })),

//   deleteRecipe: (recipeId) =>
//     set((state) => ({
//       recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
//     })),

//   updateRecipe: (updatedRecipe) =>
//     set((state) => ({
//       recipes: state.recipes.map((recipe) =>
//         recipe.id === updatedRecipe.id ? updatedRecipe : recipe
//       ),
//     })),

//   setSearchTerm: (term) => set({ searchTerm: term }), // <-- Added function to update search term
// }));

// export default useRecipeStore;









































// import { create } from 'zustand';

// const useRecipeStore = create((set) => ({
//   recipes: [],

//   // Add a new recipe
//   addRecipe: (newRecipe) =>
//     set((state) => ({ recipes: [...state.recipes, newRecipe] })),

//   // Delete a recipe
//   deleteRecipe: (id) =>
//     set((state) => ({
//       recipes: state.recipes.filter((recipe) => recipe.id !== id),
//     })),

//   // Update a recipe
//   updateRecipe: (id, updatedRecipe) =>
//     set((state) => ({
//       recipes: state.recipes.map((recipe) =>
//         recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
//       ),
//     })),
// }));

// export default useRecipeStore;

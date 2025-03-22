// src/components/AddRecipeForm.js
import { useState } from "react";

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required.";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required.";
    if (!steps.trim()) newErrors.steps = "Preparation steps are required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    const newRecipe = {
      id: Date.now(),
      title,
      summary: steps.split(". ")[0],
      image: "https://via.placeholder.com/150",
      ingredients: ingredients.split("\n").map((ing) => ing.trim()),
      steps: steps.split("\n").map((step) => step.trim()),
    };

    onAddRecipe(newRecipe);
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        <label className="block mb-2 font-semibold">Recipe Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
        {errors.title && <p className="text-red-500">{errors.title}</p>}
        
        <label className="block mt-4 mb-2 font-semibold">Ingredients (one per line):</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
        {errors.ingredients && <p className="text-red-500">{errors.ingredients}</p>}
        
        <label className="block mt-4 mb-2 font-semibold">Preparation Steps (one per line):</label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
        {errors.steps && <p className="text-red-500">{errors.steps}</p>}
        
        <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;

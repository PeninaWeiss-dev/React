import './App.css';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppBar from './Components/AppBar';
import Home from './Components/Home'
import FavoritesList from './Components/FavoritesList';
function App() {
  const Login = React.lazy(() => import('./Components/Login'))
  const RecipeDetails = React.lazy(() => import('./Components/RecipeDetails'))
  const RecipeList = React.lazy(() => import('./Components/RecipesList'))
  const CategoriesList = React.lazy(() => import('./Components/CategoriesList'))
  const FavoritesList = React.lazy(() => import('./Components/FavoritesList'))
  const Loader=React.lazy(() => import('./Components/Loader'))
  const AddRecipe=React.lazy(() => import('./Components/AddRecipe'))

  return (
    <div className="App">
      <AppBar />
      <Routes>
        <Route path='/' element={<Suspense fallback={"loading..."}><Home /></Suspense>} />
        <Route path='/Login' element={<Suspense fallback={"loading..."}><Login /></Suspense>} />
        <Route path="/CategoriesList" element={<Suspense fallback={"loading..."}><CategoriesList /></Suspense>} />
        <Route path="/CategoriesList/:categoryId" element={<Suspense fallback={"loading..."}><RecipeList /></Suspense>}/>
        <Route path="/CategoriesList/:categoryId/:recipeId" element={<Suspense fallback={"loading..."}><RecipeDetails /></Suspense>}/>
        <Route path="/FavoritesList" element={<Suspense fallback={"loading..."}><FavoritesList /></Suspense>} />
        <Route path="/AddRecipe" element={<Suspense fallback={"loading..."}><AddRecipe /></Suspense>} />
      </Routes>
    </div>
  );
}

export default App;

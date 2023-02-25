import './App.css';
import React from 'react'
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import Recipes from './pages/Recipes';

import RecipesList from './components/RecipesList';

import UpdateRecipe from './components/UpdateRecipe';
import NavBarMenu from './components/NavBarMenu';

import CreateRecipe from './components/CreateRecipe';
import RecipePage from './pages/RecipePage'





function App() {
return (
  <Router>
      <div className="App">
        <div className="app">
          <NavBarMenu />
          <Routes>
            <Route path="/" exact element={ <Recipes />} />
            <Route path='/recipe' element={<RecipesList />} />
            <Route path='/:id/' exact element={<RecipePage />} />
            <Route path="/create" element={ <CreateRecipe />} />
            <Route path="/:id/update"  exact element={ <UpdateRecipe />} /> 
           

          </Routes>
        </div>
      </div>
  </Router>
  );
}
export default App;     

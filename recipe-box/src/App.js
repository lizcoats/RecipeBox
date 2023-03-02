import './App.css';
import React from 'react'
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import { AuthProvider } from './context/AuthContext';

import Recipes from './pages/Recipes';
import RecipesList from './components/RecipesList';
import UpdateRecipe from './components/UpdateRecipe';
import NavBarMenu from './components/NavBarMenu';
import CreateRecipe from './components/CreateRecipe';
import RecipePage from './pages/RecipePage'
import Login from './pages/Login';
import PrivateRoutes from './utils/PrivateRoutes';

function App() {
return (
  <div className="App">
  <div className="app">
    <Router>
      <AuthProvider>
        <NavBarMenu />
            <Routes>
              <Route path="/" exact element={ <Recipes />} />
              
                <Route element={<PrivateRoutes />}>
                <Route path='/recipe' element={<RecipesList />} />
                <Route path='/:id/' exact element={<RecipePage />} />
                <Route path="/create" element={ <CreateRecipe />} />
                <Route path="/:id/update"  exact element={ <UpdateRecipe />} /> 
              </Route>
             
              <Route path="/login" element={ <Login />} />
            </Routes>
      </AuthProvider>
    </Router>
  </div>
  </div>
  );
}
export default App;     

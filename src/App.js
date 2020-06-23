import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeCard from './Components/RecipeCard/RecipeCard'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <RecipeCard/>
        
      </div>
    );
  }
}

export default App;

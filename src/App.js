import './App.css';
import './screens/Home';
import { Switch, Route } from "react-router-dom";
import Home from "./screens/Home"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:sortBy" render={props => <Home {...props} />} />
      </Switch>
    </div>
  );
}

export default App;


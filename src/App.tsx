import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import HomeServices from "./pages/HomeServices";
import Medical from "./pages/Medical";
import RealEstate from "./pages/RealEstate";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/home-services" component={HomeServices} />
      <Route path="/medical" component={Medical} />
      <Route path="/real-estate" component={RealEstate} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;

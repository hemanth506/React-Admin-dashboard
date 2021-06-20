import { Route, Switch } from "react-router-dom";

import Allmeetupspage from "./pages/allmeetups";
import Favouritespage from "./pages/favourites";
import Newmeetupspage from "./pages/newmeetups";

import Layout from "./components/layout/layout";

function App() {
  return (
    <Layout>
      {/* 1)switch is used to run one specific url at a time 
          2) exact uses to get only url which matches exactly
      */}
      <Switch>
        <Route path="/" exact>
          <Allmeetupspage />
        </Route>
        <Route path="/favourites" exact>
          <Favouritespage />
        </Route>
        <Route path="/newmeetups" exact>
          <Newmeetupspage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

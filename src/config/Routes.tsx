import { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

// List of Screen Components
import Home from 'screens/Home';
import Tools from 'screens/Tools';

const Routes: FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/tool/:toolPath" component={Tools} />
    </Switch>
  );
};

export default Routes;

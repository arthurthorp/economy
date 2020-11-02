import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Introduction from '../pages/Introduction';
import Scenario from '../pages/Scenario';
import News from '../pages/News';
import Goals from '../pages/Goals';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/introducao" component={Introduction} />
      <Route path="/cenario-atual" component={Scenario} />
      <Route path="/noticias" component={News} />
      <Route path="/metas" component={Goals} />
    </BrowserRouter>
  );
};

export default Routes;

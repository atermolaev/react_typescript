import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Header from '../Header/index';
import SideBar from '../SideBar/index';
import Home from '../Home/index';
import Page1 from '../Page1/index';
import Page2 from '../Page2/index';
import Logo from '../Logo/index';
import Container from '../Container/index';
import Grid from '../Grid/index';

const App: React.FC = () => {
  return (
    <Router>
      <Container>
        <Grid>
          <Grid>
            <Logo />
          </Grid>
          <Grid>
            <Header />
          </Grid>
          <Grid>
            <SideBar />
          </Grid>
          <Grid>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/page1" component={Page1} />
              <Route path="/page2" component={Page2} />
            </Switch>
          </Grid>
        </Grid>
      </Container>
    </Router>
  )
}

export default App;
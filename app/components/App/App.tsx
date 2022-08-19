import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Header from '../Header/index';
import SideBar from '../SideBar/index';
import Home from '../Home/index';
import Page1 from '../Page1/index';
import Page2 from '../Page2/index';
import Logo from '../Logo/index';
import Container from '../Container/index';
import Auth from '../Auth/index';
import Grid from '../Grid/index';

const App: React.FC = () => {
  return (
    <Router>
      <Route exact path="/" component={Auth} />
      <Route path="/main">
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
                <Route path="/main/home" component={Home} />
                <Route path="/main/page1" component={Page1} />
                <Route path="/main/page2" component={Page2} />
              </Switch>
            </Grid>
          </Grid>
        </Container>
      </Route>
    </Router>
  )
}

export default App;
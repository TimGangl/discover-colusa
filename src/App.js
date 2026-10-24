import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import History from './pages/History/History';
import Visit from './pages/Visit/Visit';
import Events from './pages/Events/Events';
import BusinessPage from './pages/BusinessPage/BusinessPage';
import BlogArticleList from './pages/BlogArticleList/BlogArticleList';
import BlogArticle from './pages/BlogArticle/BlogArticle';
import Press from './pages/Press/Press';
import Maps from './pages/Maps/Maps';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import River from './pages/River/River';
import Watermelon from './pages/Watermelon/Watermelon';
// import { faFacebook, faInstagram } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faFacebook, faInstagram)



function App() {


  return (
    <>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path={['/']} component={Home}>
            <Home />
          </Route>
          <Route exact path={['/business']} component={BusinessPage}>
            <BusinessPage />
          </Route>
          <Route exact path={['/history']} component={History}>
            <History />
          </Route>
          <Route exact path={['/visit']} component={Visit}>
            <Visit />
          </Route>
          <Route exact path={['/events']} component={Events}>
            <Events />
          </Route>
          <Route exact path={['/4th-july-watermelon-fest']} component={Watermelon}>
            <Watermelon />
          </Route>
          <Route exact path={['/river']} component={River}>
            <River />
          </Route>
          <Route exact path={['/blog-articles']} component={BlogArticleList}>
            <BlogArticleList />
          </Route>
          <Route exact path={['/blog-article']} component={BlogArticle}>
            <BlogArticle />
          </Route>
          <Route exact path={['/press']} component={Press}>
            <Press />
          </Route>
          <Route exact path={['/maps']} component={Maps}>
            <Maps />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

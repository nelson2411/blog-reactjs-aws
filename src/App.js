import logo from './logo.svg';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import NavBar from './NavBar';
import ArticleListPage from './pages/ArticleListPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
    <div className="App">
        <NavBar />
        <div id='page-body'> 
        <Switch>
        <Route path='/' component={HomePage} exact/>
        <Route path='/about' component={AboutPage} />
        <Route path='/articles-list' component={ArticleListPage} />
        <Route path='/article-page/:name' component={ArticlePage} />
        <Route component={NotFound} />
        </Switch>
        </div>        
    </div>
    </Router>    
  );
}

export default App;

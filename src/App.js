import { Switch, Route } from 'react-router-dom';
import AboutPage from './components/aboutPage/AboutPage';
import ContactPage from './components/contactPage/ContactPage';
import LastPage from './components/lastPage/LastPage';
import MyCVPage from './components/myCVPage/MyCVPage';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/contact" component={ContactPage} />
        <Route path="/last_page" component={LastPage} />
        <Route path="/my_cv" component={MyCVPage} />
        <Route path="/" component={AboutPage} />
      </Switch>
      <Navigation />
    </div>
  );
}

export default App;
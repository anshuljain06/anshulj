import { Switch, Route } from 'react-router-dom';
import AboutPage from './components/aboutPage/AboutPage';
import ContactPage from './components/contactPage/ContactPage';
import LastPage from './components/lastPage/LastPage';
import MyCVPage from './components/myCVPage/MyCVPage';
import Navigation from './components/navigation/Navigation';
import resumePDF from './pdfs/Anshul_Jain_Resume.pdf';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/last_page">
          <LastPage />
        </Route>
        <Route path="/my_cv">
          <MyCVPage pdf={resumePDF} fileName="Anshul_Jain_Resume" />
        </Route>
        <Route path="/">
          <AboutPage />
        </Route>
      </Switch>
      <Navigation />
    </div>
  );
}

export default App;
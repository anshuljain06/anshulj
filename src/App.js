import { Switch, Route } from "react-router-dom";
import "./App.scss"
import AboutPage from "./components/aboutPage/AboutPage";
import ContactPage from "./components/contactPage/ContactPage";
import EmptyBox from "./components/emptyBox/EmptyBox";
import Footer from "./components/footer/Footer";
import LastPage from "./components/lastPage/LastPage";
import MyCVPage from "./components/myCVPage/MyCVPage";
import Navigation from "./components/navigation/Navigation";
import ScrollToTopButton from "./components/scrollToTopButton/ScrollToTopButton";
import resumePDF from "./pdfs/Anshul_Jain_Resume.pdf";

function App() {
  return (
    <div className="App">
      <div className="App-Content">
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
        {/*<EmptyBox />*/}
        {/*<EmptyBox />*/}
        {/*<EmptyBox />*/}
        {/*<ScrollToTopButton />*/}
      </div>
      <div className="App-Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
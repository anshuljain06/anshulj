import "./MyCVPage.scss"
import Navigation from "./../navigation/Navigation";
import ResumePDF from "./../../pdfs/Anshul_Jain_Resume.pdf";

function MyCVPage(props) {
  return (
    <div className="MyCVPage center">
    <Navigation page="MyCVPage"/>
    <h3>[WORK IN PROGRESS]</h3>
      <h2>my cv</h2>
      <p><a className="MyCVPage-a" href={ResumePDF} download="Anshul_Jain_Resume">Download Resume</a></p>
    </div>
  );
}

export default MyCVPage;
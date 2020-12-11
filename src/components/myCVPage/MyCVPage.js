import "./MyCVPage.scss"

function MyCVPage(props) {
  return (
    <div className="MyCVPage center">
      <h1>[WORK IN PROGRESS]</h1>
      <h3>my cv</h3>
      <p><a href={props.pdf} download={props.fileName}>Download Resume</a></p>
    </div>
  );
}

export default MyCVPage;
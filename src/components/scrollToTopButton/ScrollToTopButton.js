import { useState } from "react";
import { FaAngleUp } from "react-icons/fa"
import "./ScrollToTopButton.scss"

function ScrollToTopButton(props) {

  const [showScroll, setShowScroll] = useState(false);
  
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 100 ){
      setShowScroll(true)
    } else if (showScroll &&  window.pageYOffset <= 100 ){
      setShowScroll(false)
    }
  };

  // Help
  // window.pageYOffset + window.innerHeight > window.document.body.clientHeight - 50

  window.addEventListener('scroll', checkScrollTop)

  function scrollToTopHandler(e) {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  return (
    <div className="ScrollToTopButton" style={{display: showScroll ? 'flex' : 'none'}}>
      <FaAngleUp className="ScrollToTopButtonIcon" onClick={scrollToTopHandler}/>
    </div>
  )
}

export default ScrollToTopButton;
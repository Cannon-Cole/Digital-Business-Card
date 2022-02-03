import emailicon from "../images/envelope-icon.png";
import linkedinicon from "../images/linkedin-icon.jpg";

export default function Buttons() {
  return (
    <div className="flex-row center-together">
      <div className="white-background flex-row personal-button">
        <img className="icon-size" src={emailicon}></img> <p>Email</p>
      </div>
      <div className="linkedin-blue-background white-text flex-row personal-button">
        <img className="icon-size" src={linkedinicon}></img> <p>LinkedIn</p>
      </div>
    </div>
  );
}

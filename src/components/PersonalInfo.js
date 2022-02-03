import placeholder from "../images/profile-icon.png";
import Buttons from "./Buttons";
export default function PersonalInfo() {
  return (
    <div className="flex-col">
      <img src={placeholder}></img>
      <h2 className="white-text">FName LName</h2>
      <p className="peach-text">Position</p>
      <a href="#" className="white-text">
        website
      </a>
      <Buttons />
    </div>
  );
}

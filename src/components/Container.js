import PersonalInfo from "./PersonalInfo";
import Main from "./Main";
import SocialMediaIconBar from "./SocialMediaIconBar";
export default function Container() {
  return (
    <div className="float-in-the-middle rounded-corner-large container-background-color">
      <PersonalInfo />
      <Main />
      <SocialMediaIconBar />
    </div>
  );
}

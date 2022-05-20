import twitter from "../images/social-media-icons/icons8-twitter-squared-96.png";
import facebook from "../images/social-media-icons/icons8-facebook-96.png";
import insta from "../images/social-media-icons/icons8-instagram-96.png";
import github from "../images/social-media-icons/icons8-github-squared-96.png";

export default function SocialMediaIconBar() {
  return (
    <div className="flex-row center rounded-bottom-corner-large social-media-icon-bar-background-color">
      <img className="icon" src={twitter} />
      <img className="icon" src={facebook} />
      <img className="icon" src={insta} />
      <img className="icon" src={github} />
    </div>
  );
}

import "./styles.css";
import { FacebookShareButton, PinterestShareButton } from "react-share";

import Photo from "./assets/photo.png";

export default function App() {
  return (
    <div className="App">
      <FacebookShareButton url={"google.com"}>FACEBOOK</FacebookShareButton>

      <PinterestShareButton url={"google.com"} media={Photo}>
        pint
      </PinterestShareButton>
    </div>
  );
}

import React from "react";

export default function Projects() {
    return (
    <>
     <div className="window" id="date">
            <a href="https://ebyington.github.io/supergroup1/">
              <img src={require("../images/DND.png")} width="60%" height />
            </a>
          </div>
          <div className="window" id="image2">
            <a href="https://viennamovies.com/">
              <img src={require("../images/viennapictures.png")} width="30%" height />
            </a>
          </div>
          <div className="window" id="image3">
            <a href="https://ebyington.github.io/Prework-study-guide/">
              <img src={require("../images/prework.png")} width="30%" height />
            </a>
          </div>
    </>
    )
}

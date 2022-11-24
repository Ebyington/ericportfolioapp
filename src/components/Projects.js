import React from "react";

export default function Projects() {
  return (
    <>
    <top className="sectiontitle">
    <p>Works</p>
    </top>
      <div className="row" />
      <div className="window" id="image2">
        <div className="col-md-4">
          <div className="thumbnail">
            <a href="https://viennamovies.com/">
              <img src={require("../images/viennapictures.png")} width="70%" />
            </a>
            <div class="caption">
          <p>The homepage for Vienna Pictures</p>
        </div>
          </div>
        </div>
      </div>
      <div className="window" id="image2">
        <div className="col-md-4">
          <div className="thumbnail">
            <a href="https://limitless-island-09541.herokuapp.com/">
              <img src={require("../images/flyguyreadmdsc1.png")} width="70%" />
            </a>
            <div class="caption">
          <p>Flyguys, a high-flying drone blog</p>
        </div>
          </div>
        </div>
      </div>
      <div className="window" id="date">
        <div className="col-md-4">
          <div className="thumbnail">
            <a href="https://ebyington.github.io/supergroup1/">
              <img src={require("../images/DND.png")} width="70%" />
            </a>
            <div className="caption">
          <p>A 3rd party API dinner and movie decider!</p>
        </div>
          </div>
        </div>
      </div>
      <div className="window" id="image3">
        <div className="col-md-4">
          <div className="thumbnail">
            <a href="https://ebyington.github.io/Prework-study-guide/">
              <img src={require("../images/prework.png")} width="70%" />
            </a>
            <div class="caption">
          <p>My first project</p>
        </div>
          </div>
        </div>
      </div>
    </>
  );
}

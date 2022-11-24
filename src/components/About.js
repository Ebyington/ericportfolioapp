import React from "react";
import '../css/main.css';

export default function About() {
    return (
        <div className="about">
        
        <img src={require("../images/lp_image.jpeg")} width="20%"  />
        <p>
          Eric is a young creative mind from Rochester, New York. He loves cooking, movies, music, and spending time with his girlfriend Rachel.
        </p>
      </div>
    )
}

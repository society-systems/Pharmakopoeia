import * as React from "react";
import "../styles/main.scss";
import bgImg from "../images/pic9.jpg";
import midImg from "../images/pic10.jpg";
import forImg from "../images/pic8.jpg";


const IndexPage = () => {

  return (
    <main className="parallax-container">
      <div className="">
        <img className="background__image" src={bgImg} />
        <img className="middle__image" src={midImg} />
        <img className="foreground__image" src={forImg} />
      </div>
    </main>
  );
};

export default IndexPage;

import React from "react";
import "./Hero.css";
import arrowBtn from "../../Assets/arrow_btn.png";
import playIcon from "../../Assets/play_icon.png";
import pauseIcon from "../../Assets/pause_icon.png";

const Hero = ({
  heroCount,
  setHeroCount,
  playStatus,
  setPlayStatus,
  heroData,
}) => {
  return (
    <div className="hero">
      <div className="hero__text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero__explore">
        <p>Explore the features</p>
        <a
          href="https://en.wikipedia.org/wiki/Nio_EC6"
          target="_blank"
          rel="noreferrer"
        >
          <img src={arrowBtn} alt="Arrow Button" />
        </a>
      </div>
      <div className="hero__dot__play">
        <ul className="hero__dots">
          <li
            onClick={() => setHeroCount(0)}
            className={heroCount === 0 ? "hero__dot orange" : "hero__dot"}
          ></li>
          <li
            onClick={() => setHeroCount(1)}
            className={heroCount === 1 ? "hero__dot orange" : "hero__dot"}
          ></li>
          <li
            onClick={() => setHeroCount(2)}
            className={heroCount === 2 ? "hero__dot orange" : "hero__dot"}
          ></li>
        </ul>
        <div className="hero__play">
          <img
            onClick={() => setPlayStatus(!playStatus)}
            src={playStatus ? pauseIcon : playIcon}
            alt="..."
          />
          <p>See the video</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

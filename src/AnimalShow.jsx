import './AnimalShow.css'
import React, { useState } from "react";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";

//aq aseve sheidzleboda yofiliyo bird: bird, magram rodesac key da value ertida igive sheidzleba
//rom marto key davwerot
const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

//src-shi svgMap[type] imitomaa rom src-ad aqvs svgmap-i da mis valued rom mixvdes aris type
//xolo type-shi tavistavad gadadis cxovelebis saxelebi is esabameba svgmap-is key-s da arenderebs surats
const AnimalShow = ({ type }) => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks((clicks) => clicks + 1);
  };

  return (
    <div className='animal-show' onClick={handleClick}>
      <img className='animal' alt="animals" src={svgMap[type]} />
      <img
        className='heart'
        src={heart}
        alt="heart"
        //aq width-shi 1-li 10 nishnavs sawyiss zomas anu 10px mere amas emateba kide 10px yovel klikze
        style={{ width: 10 + 10 * clicks + "px" }}
      />
    </div>
  );
};

export default AnimalShow;

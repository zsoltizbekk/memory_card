import React, { useState } from "react";
import "./App.css";

const githubImg = require("../src/assets/github.png");

const png1 = require("../src/assets/1.png");
const png2 = require("../src/assets/2.png");
const png3 = require("../src/assets/3.png");
const png4 = require("../src/assets/4.png");
const png5 = require("../src/assets/5.png");
const png6 = require("../src/assets/6.png");
const png7 = require("../src/assets/7.png");
const png8 = require("../src/assets/8.png");
const png9 = require("../src/assets/9.png");
const png10 = require("../src/assets/10.png");
const png11 = require("../src/assets/11.png");
const png12 = require("../src/assets/12.png");
const png13 = require("../src/assets/13.png");
const png14 = require("../src/assets/14.png");
const png15 = require("../src/assets/15.png");

function App() {
  const [playerChosenCards, setPlayerChosenCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const [imgs, setImgs] = useState([
    png1,
    png2,
    png3,
    png4,
    png5,
    png6,
    png7,
    png8,
    png9,
    png10,
    png11,
    png12,
    png13,
    png14,
    png15,
  ]);

  const chosenCard = (i) => {
    let temp = playerChosenCards;
    temp.push(i);
    setPlayerChosenCards(temp);
    console.log(playerChosenCards);

    result();
    shuffleCards();
  };

  const result = () => {
    let temp = score;
    temp++;
    setScore(temp);
    console.log(score);
    if (bestScore < temp) {
      setBestScore(temp);
    }
    return;
  };

  const shuffleCards = () => {
    let temp = imgs;
    let currentIndex = temp.length;
    let randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      //SWAPPING
      [temp[currentIndex], temp[randomIndex]] = [
        temp[randomIndex],
        temp[currentIndex],
      ];
    }

    setImgs([...temp]);
    console.log(imgs);
  };

  const checkChosenCard = (i) => {
    if (playerChosenCards.includes(i)) {
      //GAME OVER
      setScore(0);
      setPlayerChosenCards([]);
    } else chosenCard(i);
  };

  return (
    <div className="App">
      <div className="header">Breaking Bad memory game</div>
      <div className="score">
        score: {score} <br />
        best score: {bestScore}
      </div>

      <div className="memoryGrid">
        {imgs.map((img, i) => {
          return (
            <div key={i} onClick={() => checkChosenCard(img)}>
              <img src={img} />
            </div>
          );
        })}
      </div>
      <div className="footer">
        <h2 className="h2Footer">Copyright © 2022 zsoltizbekk</h2>
        <a href="https://github.com/zsoltizbekk">
          <img src={githubImg} className="footer-img" alt="" />
        </a>
      </div>
    </div>
  );
}

export default App;

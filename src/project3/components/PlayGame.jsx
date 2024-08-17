import React from "react";
import styled from "styled-components";
import TotalScore from "./totalscore";
import DiceSelector from "./DiceSelector";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button, OutlineButton } from "./btn";
import Rules from "./rules";

const PlayGame = () => {
  const [score, setscore] = useState(0);
  const [selectednumber, setselectednumber] = useState();
  const [currentdice, setcurrentdice] = useState(1);
  const [error, seterror] = useState("");
  const [showRules, setShowRules] = useState(false);

  const genraterandomnumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  
  const rotatemDice = () => {
    if (!selectednumber) {
      seterror("Please select a number first");
      return;
      
    }
    const randomNumber = genraterandomnumber(1, 7);
    
    setcurrentdice((prev) => randomNumber);
    if (selectednumber === randomNumber) {
      setscore((prev) => prev + randomNumber);
    } else {
      setscore((prev) => prev - 1);
    }

    setselectednumber(undefined);
  };

  const resetScore = () => {
    setscore(0);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score } />
        <DiceSelector
          error={error}
          seterror={seterror}
          selectednumber={selectednumber}
          setselectednumber={setselectednumber}
        />
      </div>

      <RollDice currentdice={currentdice} rotatemDice={rotatemDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset </OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>

        {showRules && <Rules />}
      </div>
    </MainContainer>
  );
};

export default PlayGame;

const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;
